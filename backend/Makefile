MIGRATIONS_DIR=migrations

run:
	go run cmd/api/main.go

migrate-create:
	@if [ -n ${name} ]; then \
		migrate create -ext sql -dir $(MIGRATIONS_DIR) -seq ${name}; \
	else \
		echo "Usage: make migrate-create <migration_name>"; \
		exit 1; \
	fi
