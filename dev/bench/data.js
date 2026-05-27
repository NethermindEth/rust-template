window.BENCHMARK_DATA = {
  "lastUpdate": 1779922849269,
  "repoUrl": "https://github.com/NethermindEth/rust-template",
  "entries": {
    "Rust Template Benchmark": [
      {
        "commit": {
          "author": {
            "email": "wisemrmusa@gmail.com",
            "name": "Musa AbdulKareem",
            "username": "WiseMrMusa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "888640c2234394bcb97130d51f468a7b28d7a540",
          "message": "ci: remove external data JSON path from benchmark.yml (#44)",
          "timestamp": "2026-02-19T22:13:19+01:00",
          "tree_id": "7f68a0e85909c74c5fedba162a40142cb58117a6",
          "url": "https://github.com/NethermindEth/rust-template/commit/888640c2234394bcb97130d51f468a7b28d7a540"
        },
        "date": 1771536313106,
        "tool": "cargo",
        "benches": [
          {
            "name": "add_small_integers valid",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "add_small_integers bound check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sub_small_integers valid",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sub_small_integers bound check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48178500+ElusAegis@users.noreply.github.com",
            "name": "Artem",
            "username": "ElusAegis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81ec23a30d69337f098b1507778503ab27faf913",
          "message": "fix: repair the broken README badges (#46)\n\nThis PR resolves the broken or misleading badges in the template README.\n\n**Coverage (dropped):**\nThe badge pointed at `coverage.yml`, a workflow that did not exist (the\nreal one was `coverage-pr.yml`), so it rendered as a broken image.\nPointing it at the correct `coverage-pr.yml` would have rendered\ncorrectly, however it would have been misleading, as it would only\nindicate whether the CI run succeeded (already shown by the CI flag) and\nnot the coverage percentage (or whether it had regressed, given how the\nCI is structured). After considering how to show the percentage, either\nthrough persisting it in the Pages deploy or on a dedicated badges\nbranch, both seemed awkward enough not to enforce as a default, and\nhence the removal of the badge.\n\n**Docs:**\nDocs in the repo can be published two ways (GitHub Pages via `docs.yml`,\nor docs.rs on a crates.io publish). Offering both badges caused issues,\nas they are effectively mutually exclusive: there should be only one\ncanonical place for the docs, not two competing links. Pages is the\ndefault doc mode the template configures (with `docs.yml` running on\npush to main); if you publish to crates.io instead, delete `docs.yml`\nand swap in the docs.rs badge, kept as a commented snippet beside it.\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-27T19:59:15-03:00",
          "tree_id": "5c0b396c8724a2be91bfa20471cdc187481c67f3",
          "url": "https://github.com/NethermindEth/rust-template/commit/81ec23a30d69337f098b1507778503ab27faf913"
        },
        "date": 1779922848986,
        "tool": "cargo",
        "benches": [
          {
            "name": "add_small_integers valid",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "add_small_integers bound check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sub_small_integers valid",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sub_small_integers bound check",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}