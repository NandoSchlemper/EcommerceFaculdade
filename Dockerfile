FROM golang:1.22 AS builder

WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend ./backend
WORKDIR /app/backend/src
ENV CGO_ENABLED=1
RUN go build -o myapp .

FROM debian:bookworm-slim

WORKDIR /app
COPY --from=builder /app/backend/src/myapp .
COPY db/ecommerce.db /app/db/

CMD ["./myapp"]
