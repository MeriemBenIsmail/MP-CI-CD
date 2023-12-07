# main.tf

provider "kubernetes" {
  config_path = "C:\\Users\\meriem\\.kube\\config" 
}

resource "kubernetes_deployment" "mongodb_deployment" {
  metadata {
    name      = "mongodb-deployment"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "mongodb"
      }
    }

    template {
      metadata {
        labels = {
          app = "mongodb"
        }
      }

      spec {
        container {
          name  = "mongodb"
          image = "mongo:latest"
          port {
            container_port = 27017
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "mongodb_service" {
  metadata {
    name      = "mongodb-service"
  }

  spec {
    selector = {
      app = "mongodb"
    }

    port {
      port        = 27017
      target_port = 27017
    }
  }
}

resource "kubernetes_deployment" "app_deployment" {
  metadata {
    name      = "app-deployment"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "express-app"
      }
    }

    template {
      metadata {
        labels = {
          app = "express-app"
        }
      }

      spec {
        container {
          name  = "express-app"
          image = "meriem1219/mp-ci-cd:latest"  # Update with your image details
          port {
            container_port = 3000
          }

          env {
            name  = "MONGO_URI"
            value = "mongodb://mongodb-service:27017/MP-database"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "app_service" {
  metadata {
    name      = "app-service"
  }

  spec {
    selector = {
      app = "express-app"
    }

    port {
      port        = 3000
      target_port = 3000
    }
  }
}
