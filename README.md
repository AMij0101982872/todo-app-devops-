# todo-app-devops — TP2 DevOps HESTIM

Application « Todo App » (frontend React + API Node.js) utilisée pour le TP2 du cours **DevOps & Docker** (HESTIM, Prof. Azeddine KHIAT).

Basée sur [docker/getting-started-todo-app](https://github.com/docker/getting-started-todo-app) (licence Apache 2.0).

| Fichier | Rôle |
|---|---|
| `Dockerfile` | Image multi-étapes : client, backend, **test**, final |
| `compose.yaml` | Environnement de développement (5 services) |
| `.github/workflows/ci-cd.yml` | Pipeline CI/CD : tests → build → publication sur ghcr.io |
| `compose.prod.yaml` | Déploiement de l'image publiée, avec healthcheck |

Déployer la dernière version :

```bash
docker compose -f compose.prod.yaml pull
docker compose -f compose.prod.yaml up -d
```
