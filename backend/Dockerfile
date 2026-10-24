FROM python:3.9-slim
WORKDIR /app

ENV FLASK_APP=app.py \
    FLASK_RUN_HOST=0.0.0.0 \
    FLASK_RUN_PORT=5000 \
    SESSION_FILE_DIR=/sessions \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt \
    && useradd --system --no-create-home appuser \
    && mkdir -p /sessions && chown appuser /sessions

COPY . .

USER appuser
EXPOSE 5000
CMD ["flask", "run"]
