<script lang="ts" context="module">
	export type IconName =
    | 'arrow-top-right'
    | 'arrow-bottom-right'
    | 'arrow-right'
    | 'arrow-up'
    | 'arrow-down'
    | 'menu-dots'
    | 'dots-vertical'
    | 'close'
    | 'branch'
    | 'eye'
    | 'image'
    | 'undo'
    | 'video'
    | 'pause'
    | 'play'
    | 'asterisk'
    | 'cone'
    | 'copy'
    | 'lock'
    | 'download'
    | 'check';
</script>

<script lang="ts">
  export let name: IconName;
  export let ariaHidden = true;
</script>

<svg
  aria-hidden={ariaHidden}
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="width: var(--icon-size, 16px);"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {#if name == 'arrow-top-right'}
    <path d="M5.63605 18.364L18.364 5.63603M18.364 5.63603L8.46446 5.63604M18.364 5.63603V15.5355"></path>
  {/if}
  {#if name == 'arrow-bottom-right'}
    <path d="M18.5 18.5L5.5 5.5M18.5 18.5H8.5M18.5 18.5V8.5"></path>
  {/if}
  {#if name == 'arrow-up'}
    <path d="M12 3V21M12 3L5 10M12 3L19 10"></path>
  {/if}
  {#if name == 'arrow-down'}
    <path d="M12 21V3M12 21L5 14M12 21L19 14"></path>
  {/if}
  {#if name == 'arrow-right'}
    <path d="M5 12H19M12 5L19 12L12 19"></path>
  {/if}
  {#if name == 'menu-dots'}
    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"></path>
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path>
    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"></path>
    <path d="M19 6C19.5523 6 20 5.55228 20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6Z"></path>
    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"></path>
    <path d="M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z"></path>
    <path d="M5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z"></path>
    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"></path>
    <path d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"></path>
  {/if}
  {#if name == 'dots-vertical'}
    <path d="M12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    <path d="M12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11Z"></path>
    <path d="M12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5Z"></path>
  {/if}
  {#if name == 'close'}
    <path d="M5 5L19 19M5 19L19 5"></path>
  {/if}
  {#if name == 'branch'}
    <path d="M6 7C6 8.10457 5.10457 9 4 9C2.89543 9 2 8.10457 2 7C2 5.89543 2.89543 5 4 5C5.10457 5 6 5.89543 6 7ZM6 7H18M18 7C18 8.10457 18.8954 9 20 9C21.1046 9 22 8.10457 22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7ZM18 17C18 18.1046 18.8954 19 20 19C21.1046 19 22 18.1046 22 17C22 15.8954 21.1046 15 20 15C18.8954 15 18 15.8954 18 17ZM18 17H12C10.8954 17 10 16.1046 10 15V10C10 8.34315 8.65685 7 7 7"></path>
  {/if}
  {#if name == 'eye'}
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"></path>
    <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"></path>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
  {/if}
  {#if name == 'image'}
    <path d="M5 21L14.5858 11.4142C15.3668 10.6332 16.6332 10.6332 17.4142 11.4142L21 15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21ZM10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z"></path>
  {/if}
  {#if name == 'undo'}
    <path d="M4 10H17C19.2091 10 21 11.7909 21 14C21 16.2091 19.2091 18 17 18H12M7 6L3 10L7 14"></path>
  {/if}
  {#if name == 'video'}
    <path d="M16.1176 12L22 7.33333V16.6667L16.1176 12ZM16.1176 12V7.33333C16.1176 6.04467 15.0642 5 13.7647 5H4.35294C3.05345 5 2 6.04467 2 7.33333V16.6667C2 17.9553 3.05345 19 4.35294 19H13.7647C15.0642 19 16.1176 17.9553 16.1176 16.6667V12Z"></path>
  {/if}
  {#if name == 'pause'}
    <path d="M6 5C6 4.44772 6.44772 4 7 4H9C9.55228 4 10 4.44772 10 5V19C10 19.5523 9.55228 20 9 20H7C6.44772 20 6 19.5523 6 19V5Z"></path>
    <path d="M14 5C14 4.44772 14.4477 4 15 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H15C14.4477 20 14 19.5523 14 19V5Z"></path>
  {/if}
  {#if name == 'play'}
    <path d="M5 19.1684V4.83171C5 4.04055 5.87525 3.56271 6.54076 3.99054L17.6915 11.1589C18.3038 11.5525 18.3038 12.4476 17.6915 12.8412L6.54076 20.0096C5.87525 20.4374 5 19.9595 5 19.1684Z"></path>
  {/if}
  {#if name == 'asterisk'}
    <path d="M12 4V20M18 6L6.00001 18M20 12L4 12M18 18L6.00001 6.00001"></path>
  {/if}
  {#if name == 'cone'}
    <path d="M3 21H21M7 15H17M9 9H15M19 21L13.3162 3.94868C13.1274 3.38214 12.5972 3 12 3C11.4028 3 10.8726 3.38214 10.6838 3.94868L5 21"></path>
  {/if}
  {#if name == 'copy'}
    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5M11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22Z"></path>
  {/if}
  {#if name == 'lock'}
    <path d="M7 11.0001V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11.0001M5 22.0001H19C20.1046 22.0001 21 21.1046 21 20.0001V13.0001C21 11.8955 20.1046 11.0001 19 11.0001H5C3.89543 11.0001 3 11.8955 3 13.0001V20.0001C3 21.1046 3.89543 22.0001 5 22.0001Z"></path>
  {/if}
  {#if name == 'download'}
    <path d="M12 3V17M12 17L6 11M12 17L18 11M3 21H21"></path>
  {/if}
  {#if name == 'check'}
    <path d="M3 12L9 18L21 6"></path>
  {/if}
</svg>

<style>
  svg {
    height: var(--icon-size, 16px);
    stroke: var(--icon-color, currentColor);
    stroke-width: 1.5;
  }
</style>