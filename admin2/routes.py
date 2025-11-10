from flask import Flask, request, jsonify, send_from_directory,redirect, url_for, session
from flask import Flask, request, jsonify, render_template, send_file
import psycopg2

from flask import request, jsonify
from werkzeug.utils import secure_filename
import os

from flask import Blueprint

app1 = Blueprint("admin2", __name__,template_folder="templates",static_folder="static")


def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="virtual_toor",
        user="postgres",
        password="06092003",
        port=5433,
    )
    return conn

UPLOAD_FOLDER = "static/images/img"

# Route to update hotspot
@app1.route("/update_hotspot", methods=["POST"])
def update_hotspot():
    # ? Use form instead of JSON (because of file upload)
    scene_id = request.form.get("scene_id")
    title_filter = request.form.get("title")
    new_title = request.form.get("new_title")
    yaw = request.form.get("yaw")
    pitch = request.form.get("pitch")
    text = request.form.get("text")
    new_photo_title = request.form.get("new_photo_title")

    if not scene_id:
        return jsonify({"error": "scene_id is required"}), 400

    fields = {}
    if new_title:
        fields["title"] = new_title
    if yaw:
        fields["yaw"] = float(yaw)
    if pitch:
        fields["pitch"] = float(pitch)
    if text:
        fields["text"] = text

    # Handle file upload
    if "new_photo" in request.files:
        file = request.files["new_photo"]
        if file and file.filename:
            # if photo title provided, use it as filename
            if new_photo_title:
                ext = os.path.splitext(file.filename)[1] or ".jpg"
                filename = secure_filename(new_photo_title + ext)
            else:
                filename = secure_filename(file.filename)

            save_path = os.path.join(UPLOAD_FOLDER, filename)
            file.save(save_path)

            fields["icon"] = filename  # update icon column in DB

    if not fields:
        return jsonify({"error": "No fields to update"}), 400

    # Build SQL
    set_clause = ", ".join([f"{k} = %s" for k in fields.keys()])
    values = list(fields.values())

    where_clause = "scene_id = %s"
    values.append(scene_id)
    if title_filter:
        where_clause += " AND title = %s"
        values.append(title_filter)

    sql = f"UPDATE info_hotspots SET {set_clause} WHERE {where_clause} RETURNING *;"

    # Run SQL
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(sql, values)
    updated_rows = cur.fetchall()
    conn.commit()
    cur.close()
    conn.close()

    if updated_rows:
        return jsonify({"message": "Updated successfully", "rows": updated_rows})
    else:
        return jsonify({"message": "No rows matched"}), 404

# Route to get all scene IDs for dropdown
@app1.route("/scene_ids", methods=["GET"])
def get_scene_ids():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT scene_id FROM info_hotspots ORDER BY scene_id;")
    scene_ids = [row[0] for row in cur.fetchall()]
    cur.close()
    conn.close()
    return jsonify(scene_ids)

@app1.route("/titles/<scene_id>", methods=["GET"])
def get_titles(scene_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT title FROM info_hotspots WHERE scene_id = %s ORDER BY title;", (scene_id,))
    titles = [row[0] for row in cur.fetchall()]
    cur.close()
    conn.close()
    return jsonify(titles)


# Serve frontend
@app1.route('/')
def index():

    if "user_id" not in session:   # check if logged in
        return redirect(" http://10.26.90.239:5005/auth")
    return render_template('index2.html')

