# :crab: RUST PROJECT TEMPLATE - TODO(template) PUT PROJECT NAME HERE

TODO(template) describe the project

## TODO(template) - rust template usage (remove this section after setup)

This is a rust template from ZKE team :rocket: (a focus on cryptographic libs in sync Rust).

:bike: To use it - find `TODO(template)` over the repository and set appropriate values.

- [ ] Settings -> Collaborators and teams - add your team group as admins for the repo (e.g. [zk-engineering](https://github.com/orgs/NethermindEth/teams/zk-engineering))
- [ ] Settings -> General -> Pull Requests - allow only `Allow squash merging`, also tick `Automatically delete head branches`
- [ ] Settings -> Pages -> Build and deployment -> Source Github Actions
- [ ] Update the description of the repo at the repo's page, add tag topics
- [ ] Introduce necessary sections at the repo's page (releases, deployments etc)
- [ ] Add a website url (if applicable) or a docs page (see [docs](./.github/workflows/docs.yml) flow for public repos)
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

To generate a new project from this template, you need to install [cargo-generate](https://github.com/cargo-generate/cargo-generate) and run:

```sh
cargo install cargo-generate

cargo generate --git https://github.com/NethermindEth/rust-template
```

## Examples

See [examples](./examples/).

## License

TODO(template) - update [license](https://www.notion.so/nethermind/Open-Source-Software-Usage-and-Licensing-Policy-1c3360fc38d080fd9e61c29b35d1d5af) if needed.
For commercial licenses it is required to get an approve from Legal.

Apache 2.0

## Would like to contribute?

see [Contributing](./CONTRIBUTING.md).
