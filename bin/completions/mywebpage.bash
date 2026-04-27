#!/bin/bash
# Bash completion for mywebpage

_mywebpage_complete() {
    local cur prev prev2 opts
    COMPREPLY=()
    cur="${COMP_WORDS[COMP_CWORD]}"
    prev="${COMP_WORDS[COMP_CWORD-1]}"
    prev2="${COMP_WORDS[COMP_CWORD-2]}"

    local cmds="build deploy server update uninstall"
    local server_subcmds="start stop status restart"
    local build_opts="-c --clean -s --serve --help"

    case "$COMP_CWORD" in
        1)
            COMPREPLY=( $(compgen -W "$cmds" -- "$cur") )
            ;;
        2)
            case "$prev" in
                build)
                    COMPREPLY=( $(compgen -W "$build_opts" -- "$cur") )
                    ;;
                server)
                    COMPREPLY=( $(compgen -W "$server_subcmds" -- "$cur") )
                    ;;
                deploy)
                    ;;
            esac
            ;;
        3)
            case "$prev2" in
                build)
                    case "$prev" in
                        -s|--serve)
                            ;;
                    esac
                    ;;
                server)
                    case "$prev" in
                        start|restart)
                            ;;
                    esac
                    ;;
            esac
            ;;
    esac
}

complete -F _mywebpage_complete mywebpage
