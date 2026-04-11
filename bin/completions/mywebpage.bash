#!/bin/bash
# Bash completion for mywebpage

_mywebpage_complete() {
    local cur prev opts
    COMPREPLY=()
    cur="${COMP_WORDS[COMP_CWORD]}"
    prev="${COMP_WORDS[COMP_CWORD-1]}"

    local cmds="build deploy start stop status"

    case "$COMP_CWORD" in
        1)
            COMPREPLY=( $(compgen -W "$cmds" -- "$cur") )
            ;;
        2)
            case "$prev" in
                start)
                    # optional port
                    ;;
                deploy)
                    # extra args after --
                    ;;
            esac
            ;;
    esac
}

complete -F _mywebpage_complete mywebpage
