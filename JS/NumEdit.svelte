<script>
    import { onMount } from 'svelte';
    export let idTag;
    export let idOk;
    export let idEscape;
    export let left = 6;
    export let right = 3;

    let lValue = '';
    let rValue = '';
    let dot = false;
    let destEl;
    let dummyEl;
    
    let hasFocus = false;
    let onchange = new Event('change');

    $: prefix = `${''.padStart(left - lValue.length, ' ')}${lValue}${dot ? '.' : ''}${rValue}`;
    $: blinker = dot ? right > rValue.length ? '0' : '' : '.';
    $: trail = ''.padStart(right - rValue.length - (dot && right > rValue.length ? 1 : 0), '0');

    const handleKeypress = ev => {
        if (/[0-9]/.test(ev.key)) {
            if (dot) {
                if (rValue.length < right) {
                    rValue +=  ev.key;
                }
                } else {
                    if (lValue.length < left) {
                        lValue += ev.key;
                        lValue = lValue.replace(/^[0]+/g,"");
                    }
                }
            }
            if (ev.key == '.') {
                dot = true;
            }
            destEl.value = `0${lValue}.${rValue.length > 0 ? rValue : '0'}`;
            destEl.dispatchEvent(onchange);
            ev.preventDefault();
        };
    const handleKeydown = ev => {
        if (ev.code === 'Backspace' || ev.code === 'Delete') {
            if (dot) {
                if (rValue.length > 0) {
                    rValue = rValue.slice(0, -1);
                }
                dot = rValue.length > 0;
            } else {
                if (lValue.length > 0) {
                    lValue = lValue.slice(0, -1);
                }
            }
            destEl.value = `0${lValue}.${rValue > 0 ? rValue : '0'}`;
            destEl.dispatchEvent(onchange);
            ev.preventDefault();
        }
        if (ev.code === 'Enter' || ev.code === 'NumpadEnter') {
            document.getElementById(idOk).click();
        }
        if (ev.code === 'Escape') {
            document.getElementById(idEscape).click();
        }
    };
    onMount(() => {
        const setValue = (input) => {
            var m = /^(\d+)\.?(\d*)/.exec(destEl.value.toString());
            lValue = m ? m[1].replace(/^[0]+/g,"") : '';
            rValue = m ? m[2] : '';
            dot = rValue.length > 0;
        }
        destEl = document.getElementById(idTag);
        setValue(destEl.value);
        dummyEl.focus();
    });
</script>

<style>
    pre {
        position: absolute;
        font-family: inherit;
        font-size: inherit;
        margin: 0px;
    }
    input {
        opacity:0;
        filter:alpha(opacity=0);
    }
    .hasFocus {
        -webkit-animation: blink 1s step-end infinite;
        animation: blink 1s step-end infinite;
    }
    @-webkit-keyframes blink {
        0% {
            background-color: inherit;
        }
        50% {
            background-color: lightgrey;
        }
        100% {
            background-color: darkgrey;
        }
    }
    @keyframes blink {
        0% {
            background-color: inherit;
        }
        50% {
            background-color: lightgrey;
        }
        100% {
            background-color: darkgrey;
        }
    }
</style>

<pre>
    <span>{prefix}</span><span class:hasFocus>{blinker}</span><span>{trail}</span>
</pre>
<input  type="number"
        on:keypress={handleKeypress}
        on:keydown={handleKeydown}
        on:focus={() => hasFocus = true}
        on:blur={() => hasFocus = false}
        bind:this={dummyEl}>

<!--
<svelte:window
    on:keypress={handleKeypress}
    on:keydown={handleKeydown}
    on:focus={() => hasFocus = true}
    on:blur={() => hasFocus = false} />
-->
