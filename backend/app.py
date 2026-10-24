
from flask import Flask, render_template, request, jsonify, session, redirect, send_from_directory
import x

app = Flask(__name__)

# Allow the Next.js frontend (different origin) to call this API
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response
##############################
@app.get("/")
def index():
    return jsonify({"status":"ok", "message":"Connected"})
##############################
@app.get("/items")
def show_items():
    try:
        db, cursor = x.db()
        q = "SELECT * FROM portfolio"
        cursor.execute(q)
        items = cursor.fetchall()
        return jsonify(items)
    except Exception as ex:
        print(ex, flush = True)
        return "system under maintenance ...", 500
    finally:
        if "cursor" in locals(): cursor.close()
        if "db" in locals(): db.close()
##############################