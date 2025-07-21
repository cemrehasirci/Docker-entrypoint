#!/bin/bash

echo "PostgreSQL bekleniyor..."

until nc -z db 5432; do
 sleep 1
done

echo "PostgreSQL hazır, uygulama başlatılıyor..."
exec "$@"
