from auth.db import get_db_connection

def create_user(email, password_hash):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO users (email, password, verified) VALUES (%s, %s, false)", (email, password_hash))
    conn.commit()
    cur.close()
    conn.close()

def get_user_by_email(email):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    return user

def verify_user_email(email):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("UPDATE users SET verified = true WHERE email = %s", (email,))
    conn.commit()
    cur.close()
    conn.close()
