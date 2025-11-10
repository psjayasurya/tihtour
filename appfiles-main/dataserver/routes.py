from flask import Flask, jsonify, request, Response,render_template
import psycopg2
import json
import os
import re

from flask import Blueprint

datajs = Blueprint("dataserver", __name__)

# DB Connection
def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="virtual_toor",
        user="postgres",
        password="06092003",
        port=5433  # Ensure this matches your PostgreSQL port
            )

@datajs.route('/data.js')
def generate_data_js():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT scene_id, yaw, pitch, title, text, icon FROM info_hotspots")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    # Organize hotspots by scene
    hotspots_by_scene = {}
    for scene_id, yaw, pitch, title, text, icon in rows:
        if scene_id not in hotspots_by_scene:
            hotspots_by_scene[scene_id] = []
        hotspots_by_scene[scene_id].append({
            "yaw": yaw,
            "pitch": pitch,
            "title": title,
            "text": text,
            "icon": icon
        })

    # --- Read your existing data.js ---
    base_dir = os.path.dirname(__file__)  # folder where routes.py is located
    file_path = os.path.join(base_dir, "static", "data.js")

    with open(file_path, "r", encoding="utf-8") as f:
        js_content = f.read()

    # Remove the "var APP_DATA =" and ending ";"
    json_str = re.sub(r"^var APP_DATA\s*=\s*", "", js_content.strip(), flags=re.DOTALL)
    json_str = json_str.rstrip(";")

    # Remove trailing commas (common in JS but invalid in JSON)
    json_str = re.sub(r",\s*([}\]])", r"\1", json_str)

    app_data = json.loads(json_str)

    # Replace infoHotspots from DB
    for scene in app_data["scenes"]:
        sid = scene["id"]
        scene["infoHotspots"] = hotspots_by_scene.get(sid, [])

    # Rebuild JS file
    js_code = "var APP_DATA = " + json.dumps(app_data, indent=2) + ";"
    return Response(js_code, mimetype="application/javascript")