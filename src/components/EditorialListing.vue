<template>
  <div class="editorial-listing" data-observe-resizes>
      <div class="hero">
        <img v-bind:src="listing.imageUrl" alt="">
        <h3>{{ listing.schoolName }}</h3>
      </div>
      <div class="buckets">
        <ul>
          <li>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div class="label">
              Affordable
            </div>
          </li>
          <li>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div class="label">
              Online
            </div>
          </li>
          <li>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <div class="label">
              Award
            </div>
          </li>
        </ul>
      </div>
      <div class="snippet">
        <p>
          {{ listing.snippet }}
        </p>
      </div>
      <div class="cta">
        <button>Visit Site</button>
      </div>
    </div>
</template>

<script>
export default {
  props: ["listing"],
}
</script>

<style scoped>
.editorial-listing {
  background: white;
  color: var(--black);
  /* padding: var(--spacer); */
  box-shadow: var(--boxShadowHover);
  border-radius: 2px;
  margin-bottom: var(--spacer);
  overflow: hidden;
  display: grid;
  grid-template-areas:
    "hero hero"
    "buckets cta";
  grid-template-columns: 1fr 140px;
}

.hero {
  height: 100px;
  overflow: hidden;
  grid-area: hero;
  position: relative;
}

.hero::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(to bottom, transparent, white 100%);
}

img {
  max-width: 100%;
  object-fit: contain;
  object-position: 50% 50%;
  filter: grayscale(1);
  transition: 0.2s ease-in-out;
}

.editorial-listing:hover img {
  filter: grayscale(0);
}

.hero h3 {
  position: absolute;
  bottom: 0;
  padding: var(--spacer);
  font-family: var(--baseFont);
  z-index: 3;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.85);
}

.buckets {
  grid-area: buckets;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.buckets ul {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  padding: var(--spacer);
  list-style-type: none;
}

.buckets ul li {
  margin-right: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: var(--baseFont);
}

li .icon {
  background: var(--secondaryColor);
  width: 28px;
  height: 28px;
  border-radius: 100%;
  display: flex;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
}

li .label {
  display: none;
  margin-left: 4px;
  margin-right: 8px;
}

.snippet {
  display: none;
  padding: var(--spacer);
  grid-area: snippet;
  font-family: var(--baseFont);
  font-size: 16px;
}

.cta {
  grid-area: cta;
  padding: var(--spacer);
}

.cta button {
  border: none;
  background: var(--primaryColor);
  padding: calc(var(--spacer) / 2) var(--spacer);
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: var(--materialShadow2);
  font-size: 16px;
  color: var(--white);
  font-weight: 500;
  line-height: 1.5;
}

.editorial-listing.width_MD {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 72px;
  grid-template-areas:
    "hero snippet"
    "buckets cta";
}

.editorial-listing.width_MD .hero {
  height: auto;
}

.editorial-listing.width_MD .hero h3 {
  font-size: 24px;
}

.editorial-listing.width_MD .snippet {
  display: block;
}

.editorial-listing.width_MD .cta {
  display: flex;
  justify-content: flex-end;
}

.editorial-listing.width_MD .cta button {
  font-size: 16px;
  width: auto;
  padding: 4px 24px;
}

.editorial-listing.width_LG {
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 56px 1fr 72px;
  grid-template-areas:
    "hero buckets"
    "hero snippet"
    "hero cta";
}

.editorial-listing.width_LG .hero {
  height: 275px;
}

.editorial-listing.width_LG .hero h3 {
  font-size: 32px;
}

.editorial-listing.width_LG .buckets {
  width: 100%;
}

.editorial-listing.width_LG .buckets li .icon {
  z-index: 2;
}

.editorial-listing.width_LG .buckets li .label {
  display: inline-block;
  background: rgba(0, 0, 0, 0.06);
  height: 28px;
  border-radius: 0 28px 28px 0;
  display: flex;
  align-items: center;
  padding: 0 var(--spacer) 0 calc(var(--spacer) + calc(var(--spacer) / 2));
  margin-left: calc(var(--spacer) - calc(var(--spacer) * 2));
  z-index: 1;
}

.editorial-listing.width_LG .snippet {
  display: block;
}

.editorial-listing.width_LG .cta {
  display: flex;
  justify-content: flex-end;
}

.editorial-listing.width_LG .cta button {
  font-size: 18px;
  padding: 4px 32px;
}
</style>
