# Agent instructions

<!-- kandown:agent-ref -->
## Task management

This project uses **kandown** for task management. **Always run `kandown work` when starting a new task** — it prints the current rules and board state, kept in sync with the installed CLI version. (Tasks live in `./tasks/*.md`.)

### ▲ VERCEL DEPLOY CHECK

Use the `vercel` CLI (installed globally) to verify deployments after pushing.

**When to check:** Only if the commit touches files that affect the Vercel deployment (app code, config, dependencies, build scripts). Skip for docs-only, internal tooling, or unrelated changes.

**After every qualifying push, run:**
```bash
for i in 1 2 3 4 5 6; do
  sleep 20
  STATUS=$(vercel ls --limit 1 2>&1)
  echo "$STATUS" | grep -q "● Ready" && echo "✅ Deploy OK" && exit 0
  echo "$STATUS" | grep -q "● Error" && break
done
echo "❌ Deploy failed — fetching logs"
vercel logs --limit 10
```

- Loops 6 × 20s (2min max), exits early on `● Ready`.
- If `● Error`: read the logs with `vercel logs`, diagnose, fix, commit, push, re-run the check.
- If still spinning after 2min: `vercel logs` to investigate.
