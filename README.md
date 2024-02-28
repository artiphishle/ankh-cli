# ankhcli

## Quickstart

```bash
npx ankh-cli
```

## Commands

### System

#### [sudo] systemsetup

The systemsetup command is used to configure certain per-machine settings typically configured in the System Preferences application.  The systemsetup command requires at lleast "admin" privileges to run.

| getter                 | setter            | list             |               |
|------------------------|-------------------|------------------|---------------|
| -getdate               | -setdate          |                  |               |
| -gettime               | -settime          |                  |               |
| -gettimezone           | -settimezone      | -listtimezones   |               |
|                        | -setcomputername  |                  |               |

#### systemupdate

| Args        | Description  |
| `-l`       | List updates |
| `
