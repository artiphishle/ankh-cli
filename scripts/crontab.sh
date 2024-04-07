#/bin/bash

man crontab

# List
# crontab -l

# Create
# @example */5 * * * * all5min.sh; thisToo.sh
# @example 0 */12 * * * all12hours.sh
# @example 0 12 * * 6,0 satAndSun.sh
# @example 0 9-17 * * 1-5 everyHourFrom9-17monToFri.sh
# crontab -e
