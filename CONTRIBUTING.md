# Contributor's guide

## Commit signing

Enable [commit signing](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)

```sh
git config commit.gpgsign true
```

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

Docs for `TODO(template) template-crate`:

```sh
RUSTDOCFLAGS="--html-in-header katex-header.html" cargo doc --no-deps -p template-crate --open
```

## Performance
When contributing, besides correctness, it is also important to ensure good performance and reproducibility of the results.
We recommend using [Criterion](https://crates.io/crates/criterion) for general benchmarking, as it provides a well-structured framework that allows reproducible benchmarks by just running a few commands. 

For performance, the profiling cycle is a 3-step process in which you need to first measure the resources consumed by your application, then isolate the most consuming ones, and finally optimize them.
This cycle repeats until the performance goals are met.
To carry out this optimization cycle, we recommend the following profiling tools, as they are powerful, general-purpose, and are either written or well integrated with Rust:
* [Hyperfine](https://crates.io/crates/hyperfine): Provides a simple CLI interface that allows us to benchmark compiled binaries. 
* [FlameGraph](https://crates.io/crates/flamegraph): Generates a detailed graphic of the different operations and their time in the application.
* [Dhat](https://crates.io/crates/dhat): Measures memory allocations within the application.

### Hyperfine
Once [installed](https://github.com/sharkdp/hyperfine?tab=readme-ov-file#installation), we can simply run:
```sh
hyperfine 'TODO(template) update with your binary e.g. ./target/release/...' 
```
### FlameGraph
Run
```sh
cargo install flamegraph
```
Please remember to add:
```rust
[profile.release]
debug=true
```
Into your `Cargo.toml` to add debug symbols in release mode.
Otherwise, reading the flamegraph output will be impossible.

Then, we can run:
```sh
cargo flamegraph -- 'TODO(template) update with your binary e.g. ./target/release/...'
```
This command will produce a `flamegraph.svg` file that contains a graphic representation of where the time is being spent in our application. 

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