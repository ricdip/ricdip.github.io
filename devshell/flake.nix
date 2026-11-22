{
  description = "NodeJS development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    base = {
      url = "github:ricdip/nix-templates";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      nixpkgs,
      base,
      ...
    }:
    let
      systems = base.systems;
      forAllSystems =
        f:
        nixpkgs.lib.genAttrs systems (
          system:
          let
            pkgs = import nixpkgs { inherit system; };
            mkNodeShell =
              nodejs:
              pkgs.mkShell {
                packages = [
                  nodejs # chosen version of nodejs: event-driven I/O framework for the V8 JavaScript engine

                  # utils
                  pkgs.license-generator # CLI tool for generating license files
                  pkgs.grex # a CLI tool for generating regular expressions from user-provided test cases
                  pkgs.bitwise # terminal based bitwise calculator
                  pkgs.just # a handy way to save and run project-specific commands
                  pkgs.onefetch # CLI git information tool
                  pkgs.scc # a very fast accurate code counter with complexity calculations
                ];
                shellHook = ''
                  echo ""
                  echo "> NodeJS"
                  node -v
                  echo "> Npm"
                  npm -v
                  echo ""
                  echo "*******************************"
                  echo "> NodeJS dev environment ready!"
                  echo "*******************************"
                  export PS1="$PS1 (nodejs): "
                '';

              };
          in
          f system pkgs mkNodeShell
        );
    in
    {
      # nix develop .#nodejs22 to use NodeJS 22
      # nix develop to use default NodeJS
      devShells = forAllSystems (
        system: pkgs: mkNodeShell: {
          nodejs20 = mkNodeShell pkgs.nodejs_20;
          nodejs22 = mkNodeShell pkgs.nodejs_22;
          nodejs24 = mkNodeShell pkgs.nodejs_24;
          nodejs25 = mkNodeShell pkgs.nodejs_25;
          nodejs = mkNodeShell pkgs.nodejs;

          default = mkNodeShell pkgs.nodejs;
        }
      );
    };
}
