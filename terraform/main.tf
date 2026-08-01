# 1. Tentukan Provider (Plugin yang Terraform guna)
terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

# 2. Cipta Resource (Auto-generate inventory file untuk Ansible)
resource "local_file" "tf_ansible_inventory" {
  filename = "${path.module}/generated_inventory.ini"
  content  = <<EOT
[ubuntu_servers]
ubuntu_server ansible_host=192.168.0.153 ansible_user=nabil

[ubuntu_servers:vars]
ansible_python_interpreter=/usr/bin/python3
EOT
}

