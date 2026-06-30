# DevOps & CI/CD

Environments
- Dev, Staging, Prod (optionally UAT)
- Infra as Code: Terraform; K8s (EKS/AKS/GKE) or ECS with Fargate

CI/CD
- CI: Lint, type-check, unit tests, build; SBOM + dependency scan
- CD: Blue/green or canary; migrations gated; feature flags for releases
- Secrets: per-env in vault; no secrets in CI logs; OIDC to cloud

Release Mgmt
- Trunk-based, PRs with checks; semantic versioning for services; changelogs


