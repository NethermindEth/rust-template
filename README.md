# :crab: RUST PROJECT TEMPLATE - TODO(template) PUT PROJECT NAME HERE
<!--`TODO(template) update each badge with your username and repository name.`-->
[![Lint](https://github.com/NethermindEth/rust-template/actions/workflows/linter.yml/badge.svg)](https://github.com/NethermindEth/rust-template/actions/workflows/linter.yml)
[![Build](https://github.com/NethermindEth/rust-template/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/NethermindEth/rust-template/actions/workflows/build-and-test.yml)
[![Dependencies](https://github.com/NethermindEth/rust-template/actions/workflows/dependency-audit.yml/badge.svg)](https://github.com/NethermindEth/rust-template/actions/workflows/dependency-audit.yml)
[![UB](https://github.com/NethermindEth/rust-template/actions/workflows/ub-detection.yml/badge.svg)](https://github.com/NethermindEth/rust-template/actions/workflows/ub-detection.yml)
[![Docs](https://github.com/NethermindEth/rust-template/actions/workflows/docs.yml/badge.svg)](https://github.com/NethermindEth/rust-template/actions/workflows/docs.yml)
<!-- `TODO(template)` The Docs badge above tracks the GitHub Pages docs deploy (docs.yml) --
     the default docs path for this template. It only turns GREEN once you enable GitHub
     Pages (Settings -> Pages -> Source: GitHub Actions); until then docs.yml fails on push
     and the badge is red. If instead you publish the crate to crates.io, docs.rs builds
     your docs on publish -- delete docs.yml and swap the Docs badge above for this one:
[![Docs](https://docs.rs/your-crate-name/badge.svg)](https://docs.rs/your-crate-name)
-->
<!-- You can replace them with a single badge if you create a main CI file that calls the other workflows
[![CI](https://github.com/{{USERNAME}}/{{REPOSITORY}}/workflows/CI/badge.svg)](https://github.com/{{USERNAME}}/{{REPOSITORY}}/actions)
-->
<!--`TODO(template) update with your rust version`
If you want to change from stable to Minimum Supported Rust Version (MSRV), replace the badge with:
![MSRV](https://img.shields.io/badge/rustc-1.70+-ab6000.svg) TODO(template) update specific version
-->
![Rust](https://img.shields.io/badge/rust-stable-orange.svg)
<!--`TODO(template) update license version if needed. Check LICENSE first`-->
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
<!--`TODO(template)` set your-crate-name below; shows "crates.io | not found" until you
    publish to crates.io. Remove this badge if you don't publish.-->
[![Crates.io](https://img.shields.io/crates/v/your-crate-name.svg)](https://crates.io/crates/your-crate-name)

TODO(template) describe the project

## TODO(template) - rust template usage (remove this section after setup)

This is a rust template from ZKE team :rocket: (a focus on cryptographic libs in sync Rust).

:bike: To use it - find `TODO(template)` over the repository and set appropriate values.

- [ ] Settings -> Collaborators and teams - add your team group as admins for the repo (e.g. [zk-engineering](https://github.com/orgs/NethermindEth/teams/zk-engineering))
- [ ] Settings -> General -> Pull Requests - allow only `Allow squash merging`, also tick `Automatically delete head branches`
- [ ] Settings -> Pages -> Build and deployment -> Source Github Actions
- [ ] Update the description of the repo at the repo's page, add tag topics
- [ ] Introduce necessary sections at the repo's page (releases, deployments etc)
- [ ] Docs: this template publishes rustdoc to GitHub Pages on push to main ([`docs.yml`](./.github/workflows/docs.yml)). Enable Pages (Settings -> Pages -> Source: GitHub Actions) so the deploy succeeds and the Docs badge turns green, and set the Pages URL as the repo website (About -> Website). If you publish to crates.io instead, delete `docs.yml` and use the docs.rs badge in the README
- [ ] Add [all contributors](https://allcontributors.org/docs/en/cli/installation)
- [ ] Import protection rulesets (see below) in the repo settings (Settings -> Rules -> Rulesets -> Import a ruleset)
- [ ] For binary crates with specific requirements to Rust features consider also [pinning](https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file) the rust toolchain version

Main branch protection

```json
{
  "id": 4981961,
  "name": "Main protection",
  "target": "branch",
  "source_type": "Repository",
  "source": "NethermindEth/rust-template",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "~DEFAULT_BRANCH"
      ]
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "required_deployments",
      "parameters": {
        "required_deployment_environments": []
      }
    },
    {
      "type": "required_signatures"
    },
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 1,
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": true,
        "automatic_copilot_code_review_enabled": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    }
  ],
  "bypass_actors": []
}
```

Signed commits

```json
{
  "id": 4982030,
  "name": "Signed commits",
  "target": "branch",
  "source_type": "Repository",
  "source": "NethermindEth/rust-template",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "~ALL"
      ]
    }
  },
  "rules": [
    {
      "type": "required_signatures"
    }
  ],
  "bypass_actors": []
}
```

## How to use

Either with "Use this template" green button on Github or, in case of using another git hosting service (or have to avoid referencing this repository), you can use [cargo-generate](https://github.com/cargo-generate/cargo-generate).

```sh
cargo install cargo-generate

cargo generate --git https://github.com/NethermindEth/rust-template
```

## Examples

See [examples](./examples/).

## AI tools disclosure - TODO(template)

The content published here may have been refined/augmented by the use of large language models (LLM), computer programs designed to comprehend and generate human language. However, any output refined/generated with the assistance of such programs has been reviewed, edited and revised by [TODO(template) company name].

## License

TODO(template) - update [license](https://www.notion.so/nethermind/Open-Source-Software-Usage-and-Licensing-Policy-1c3360fc38d080fd9e61c29b35d1d5af) if needed.
For commercial licenses it is required to get an approve from Legal.

Apache 2.0

## Would like to contribute?

see [Contributing](./CONTRIBUTING.md).
