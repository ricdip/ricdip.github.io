{
  description = "ricdip personal website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs, ... }@inputs:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          nodejs_22 # node 22.14.0 (LTS)
        ];

        shellHook = ''
          echo "type 'npm install' to download project dependencies."
          echo "type 'npm run dev' to start a local dev server."
        '';
      };
    };
}
