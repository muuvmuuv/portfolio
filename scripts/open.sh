version=$(<./static/version)
file=./reports/v$(echo $version | sed 's/\(.*\)\.[0-9]/\1/').0/$1

if [[ -f "$file" ]]; then
  open -g "$file"
else
  printf "[\e[36mINFO\e[0m] $file does not exist!\n"
fi
