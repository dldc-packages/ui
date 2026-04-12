---
name: changeset-single-line-commit
description: "Create valid changeset-backed commits with single-line messages, including split workflows with one changeset per commit when needed."
argument-hint: "Describe what changed and which package(s) are affected"
---

# Changeset Single-Line Commit

## When To Use

- You changed one or more publishable packages.
- You need a proper `.changeset/*.md` entry before commit.
- You want a single-line commit message (no multiline body).

## Quick Checklist

1. Confirm changed files and affected package(s).
2. Create/update the changeset entry with correct bump type (`patch`, `minor`, or `major`).
3. Ensure the changeset summary is one clear line describing user-facing impact.
4. Stage code changes and the `.changeset/*.md` file together.
5. Commit using a single-line subject only.

## Decision Points

- Bump type:
  - `patch`: bug fix or internal improvement without new public capability.
  - `minor`: backward-compatible feature.
  - `major`: breaking change.
- No release note needed:
  - If no publishable package changed, skip changeset and commit normally.
- Multiple packages changed:
  - Use one commit with one changeset when the work is one cohesive user-facing change.
  - Split into multiple commits when the work contains distinct user-facing changes.
  - For split commits, create one changeset per commit and stage only that commit's code with its matching `.changeset/*.md` file.

## Completion Criteria

- A `.changeset/*.md` file exists and references the right package name(s).
- Bump level matches intended impact.
- Summary is concise and release-note ready.
- Commit message is a single line.
- Each commit includes implementation changes and exactly one matching changeset.

## Suggested Commands

```bash
# Single cohesive change
pnpm changeset
git add <files-for-change-1> .changeset/<change-1>.md
git commit -m "<single-line summary>"

# Distinct second change (optional)
pnpm changeset
git add <files-for-change-2> .changeset/<change-2>.md
git commit -m "<single-line summary>"
```

## Commit Message Rules

- Use one subject line only.
- Keep it imperative and specific.
- Any commit prefix is acceptable for this workflow.
- Avoid multiline `-m` usage and avoid opening an editor body for this workflow.

## Output

- One single-line commit with one valid changeset when work is cohesive.
- Multiple single-line commits with one valid changeset per commit when work is split.
