# Observability

Telemetry
- Logs: structured JSON (app + nginx), correlation IDs
- Metrics: RED/USE for services; business KPIs; SLOs with error budgets
- Tracing: OpenTelemetry to backend (Grafana Tempo/Jaeger)

Dashboards & Alerts
- Per-domain service dashboards; log-based alerts; anomaly detection on KPIs

Runbooks
- Oncall rotations, incident response, postmortem template


