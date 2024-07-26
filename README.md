# Chama
> [Chama]( ???) language meaning???? in French

## Prerequisites
* Have a minimum of competence on k8s and admin access to one cluster

## Directus deployment

Firstly, install all required tools:
```sh
helm repo add directus https://digitalist-se.github.io/directus-helm-chart/
helm install my-directus directus/directus --version 0.7.40 --namespace chama --create-namespace -f values.yml
```

## Ressources
https://artifacthub.io/packages/helm/directus/directus
