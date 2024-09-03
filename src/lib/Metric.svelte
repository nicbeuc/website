<script lang="ts">
  import Icon from "$lib/Icon.svelte";

  export let name: string;
  export let delta: number;

  const icon = delta > 0 ? 'arrow-top-right' : 'arrow-bottom-right';
</script>

<dl>
  <dt>{name}</dt>
  <dd><Icon name={icon} --icon-size=".65em"/><span>{delta}<span>%</span></span></dd>
</dl>

<style>
  dl {
    padding: 2rem;
    border: 1px dashed var(--color-neutral-500);
    background-color: var(--color-neutral-100);
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.2rem;

    @media screen and (max-width: 799px) {
      flex-direction: row;
      align-items: baseline;
    }
  }

  dt {
    color: var(--color-neutral-600);
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
    font-size: .75em;
    margin-inline-start: .15em;
    color: var(--color-neutral-600);
  }
</style>