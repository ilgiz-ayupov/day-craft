FROM golang:1.24 AS builder
WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .
RUN go build -o bin/main cmd/api/main.go

FROM ubuntu:22.04
COPY --from=builder /app/bin/main /bin/main
ENTRYPOINT ["/bin/main"]
