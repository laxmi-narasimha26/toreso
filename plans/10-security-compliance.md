# Security & Compliance

Standards
- PCI DSS SAQ A for payments (tokenized via gateway)
- SOC 2 Type II readiness; CIS Benchmarks for infra
- GDPR/DPDP compliance (DPA, data subject rights, retention policies)

Practices
- Secrets: vault (AWS Secrets Manager/HashiCorp Vault); rotation policies
- Data: encryption at rest (KMS) and in transit (TLS 1.2+); PII minimization
- App: OWASP ASVS controls, CSRF protection, MFA for sensitive actions, rate limiting
- Infra: VPC isolation, WAF, IDS, hardened AMIs/containers, supply chain scanning
- Logging: tamper-evident audit logs for critical actions

Risk Areas (from spec) & Controls
- Supplier onboarding at scale → automated KYC, doc OCR, risk scoring
- Marketplace trust → verified badges, transparent ratings, dispute process
- Integrations with existing buyer systems → secure APIs + SCIM/SAML where needed


