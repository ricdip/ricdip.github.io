# Show help message
default:
    @just --list

# Create workspace
create-workspace:
    mkdir -p devshell
    mv flake.nix devshell

# Enter workspace
enter-workspace:
    nix develop ./devshell

# Enter workspace specifying the NodeJS version
enter-workspace-with-version NODEJS:
    nix develop ./devshell#{{NODEJS}}

