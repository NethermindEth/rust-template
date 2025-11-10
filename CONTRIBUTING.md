# Contributor's guide

## Commits
### Commit signing

Enable [commit signing](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)

```sh
git config commit.gpgsign true
```
 
### Commit messages

Strive to write informative commit messages: a single line summary of the change and maybe a small exposition in the body of the message. 
If you do write an exposition, include parts of it in the PR description and in the source code as well. This gives multiple avenues to find the motivation for the change.

Avoid writing commit messages like "wip", "fix", or drawn-out commit messages that actually say nothing. Use fixup commits instead, as these can be automatically squashed, thereby keeping the log clean.
To make a fixup commit: `git commit --fixup SHA`, where SHA points to the commit hash where, looking back, you would have liked to have made this change in the first place. 
When you publish the branch for review, do `git rebase --autosquash` beforehand and the history will be clean. This way you'll have chronological checkpoints while developing. Upon publishing, you'll have a clean commit history that tells a logically constructive story without odd backreferences to earlier points.
Fixup commits are also useful during reviews, as they maintain the chronological points of the discussion and will be squashed out when merging. 

## Prerequisites

* [Rust](https://www.rust-lang.org/tools/install)
* [cargo deny](https://github.com/EmbarkStudios/cargo-deny)
* [typos](https://github.com/crate-ci/typos?tab=readme-ov-file#install)
* [cargo sort](https://github.com/DevinR528/cargo-sort)

## Code quality assurance

Install a pre-push git hook:

```sh
git config core.hooksPath .githooks
```

## Running the Rust Documentation Locally
After cloning the repository, follow the instructions below to run the documentation locally:

```sh
cargo doc
```

Docs for `TODO(template) template_crate`:

```sh
RUSTDOCFLAGS="--html-in-header katex-header.html" cargo doc --no-deps -p template_crate --open
```

## Performance
When contributing, besides correctness, it is also important to ensure good performance and reproducibility of the results.
We recommend using [Criterion](https://crates.io/crates/criterion) for general benchmarking, as it provides a well-structured framework that allows reproducible benchmarks by just running a few commands.
We want to highlight 2 very useful commands in Criterion:
- `cargo bench -- --save-baseline <name>` allows you to save a benchmark under a given name to serve as baseline.
- `cargo bench -- --baseline <name>` compares the current benchmark against a previously saved baseline.

As an alternative to Criterion, we also recommend [Divan](https://crates.io/crates/divan), which provides a simpler API and a more intuitive benchmark organization.
Criterion is still recommended for more rigorous statistical analysis, but Divan is great for most applications.

For performance, the profiling cycle is a 3-step process in which you need to first measure the resources consumed by your application, then isolate the most consuming ones, and finally optimize them.
This cycle repeats until the performance goals are met.
To carry out this optimization cycle, we recommend the following profiling tools, as they are powerful, general-purpose, and are either written or well integrated with Rust:
* [Hyperfine](https://crates.io/crates/hyperfine): Provides a simple CLI interface that allows us to benchmark compiled binaries. 
* [Samply](https://crates.io/crates/samply): Generates a detailed graphic of the different operations and their time in the application. We recommend it over [FlameGraph](https://crates.io/crates/flamegraph) as it allows for filtering, and the webserver viewer provides a better experience than the `.svg` your get from Flamegraph. 
* [Dhat](https://crates.io/crates/dhat): Measures memory allocations within the application.

### Hyperfine

Once [installed](https://github.com/sharkdp/hyperfine?tab=readme-ov-file#installation), we can simply run:
```sh
hyperfine 'TODO(template) update with your binary e.g. ./target/release/...' 
```
### Samply

Samply creates [flame graphs](https://www.youtube.com/watch?v=D53T1Ejig1Q&t=813s) and detailed call stacks with a browser-based [Firefox Profiler](https://profiler.firefox.com/).

Run
```sh
cargo install --locked samply
```

You [may need](https://github.com/mstange/samply/?tab=readme-ov-file#description) to grant some system access to `samply`.

Into your `Cargo.toml` to add debug symbols in profiling mode:

```toml
[profile.profiling]
inherits = "release"
debug = true
```

Otherwise, reading the output will be impossible.

Then, we can run:
```sh
samply record 'TODO(template) update with your binary e.g. ./target/release/...'
```
This command will open a browser page that contains a graphic representation of where the time is being spent in our application.

[Samply Kit](https://github.com/xrvdg/samply-kit) is a small toolkit for analysing and manipulating Samply and Firefox Profile data. It provides utilities for filtering and aggregating sample counts per function:
- Filtering is very helpful when working with Rayon for example. Rayon clobbers up stack traces and by filtering the nested rayon calls you can have a clean stack trace again.
- Aggregating sample counts per function helps in finding functions that look like small contributors in a regular flamegraphs, but in aggregate are actually large contributors. This is useful for finding mathematical routines such as multiplications and hashes that need to be optimised, or excessive memory operations that don't show up otherwise.

### Dhat
We can add Dhat as a dependency:
```rust
[dependencies]
dhat = "latest"

[features]
dhat-heap = []
```
Then we need to replace the default allocator with the `dhat` allocator.
And set the profiler when the `dhat-heap` feature is enabled:
```rust
#[cfg(feature = "dhat-heap")]
#[global_allocator]
static ALLOC: dhat::Alloc = dhat::Alloc;

fn main() {
    #[cfg(feature = "dhat-heap")]
    let _profiler = dhat::Profiler::new_heap();
}
```
If we run the binary again with the `dhat-heap` feature enabled, we will get a JSON file with the memory allocations done during the execution.

Many other profiling libraries exist, please check the [Rust Performance Book](https://nnethercote.github.io/perf-book/profiling.html) for a more detailed list.
But these 3 should be enough for the average application to identify bottlenecks and optimize them.

For async-rust we also recommend: [Tracing](https://crates.io/crates/tracing), [Tokio-Console](https://crates.io/crates/tokio-console), and [Oha](https://crates.io/crates/oha).
For Rayon-based parallel Rust code, we recommend Samply in combination with [Samply Kit](https://github.com/xrvdg/samply-kit) to filter out Rayon from the stack traces.
