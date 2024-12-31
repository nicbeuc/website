<script lang="ts">
  import Icon from "$lib/Icon.svelte";

  export let name: string;
  export let delta: number;

  const icon = delta > 0 ? 'arrow-up' : 'arrow-down';
</script>

<dl>
  <dt>{name}</dt>
  <dd><Icon name={icon} --icon-size=".65em"/><span>{delta}<span>%</span></span></dd>
</dl>

<style>
  dl {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: .8rem;

    &:not(:last-of-type) {
      --__dotted-border-color: var(--dotted-border-color, var(--color-neutral-400));
      --__dotted-border-gap: var(--dotted-border-gap, 4px);
      background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px;
      background-repeat: no-repeat;
	    background-image: repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0), repeating-linear-gradient(90deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0), repeating-linear-gradient(180deg, var(--__dotted-border-color), var(--__dotted-border-color) 1px, transparent 0, transparent var(--__dotted-border-gap), var(--__dotted-border-color) 0), repeating-linear-gradient(270deg, transparent, transparent 1px, transparent 0, transparent var(--__dotted-border-gap), transparent 0);
	    background-position: 0 0, 0 0, 100% 0, 0 100%;
    }

    @media screen and (max-width: 799px) {
      flex-direction: row;
      align-items: baseline;
      background-image: none !important;
    }
  }

  dt {
    color: var(--color-neutral-700);
    font-size: var(--font-size-body-sm);
    line-height: 1.2;
  }

  dd {
    font-size: 2.4rem;
    display: flex;
    align-items: baseline;
    line-height: 1;
    gap: .2em;
    /* letter-spacing: -.05ch; */
    font-weight: 400;
    /* font-family: var(--font-family-mono); */
  }

  dd span span {
    font-size: .65em;
    margin-inline-start: .15em;
    color: var(--color-neutral-600);
    font-weight: 200;
  }
</style>