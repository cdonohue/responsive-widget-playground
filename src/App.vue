<template>
  <div class="page">
    <div class="main">
      <aside class="sidebar">
        <quick-degree-finder data-widget />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <editorial-links data-widget />
        <br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum eligendi voluptas quam nemo nisi voluptate quidem iusto laboriosam in quos mollitia, error assumenda laborum aut consectetur quod aliquid libero ratione. Labore enim fugit sequi sunt esse accusamus. Sed odit eum corporis! Quaerat qui molestias quas facilis porro, vitae sit nam earum laudantium similique. Dolores ullam sed, cumque fugiat necessitatibus officia aspernatur iusto. Vel, tempora ullam ducimus eaque ab alias voluptas, dolorum minima, ipsum ad excepturi nostrum quaerat. Quis facere deserunt ullam aspernatur laborum pariatur dolorum necessitatibus quibusdam quaerat impedit. Mollitia magnam, amet animi sapiente aut, voluptate repudiandae quaerat maiores at doloremque modi architecto dignissimos totam, blanditiis provident voluptates. Ex fugit distinctio quaerat, molestiae sequi maxime quos sapiente sed debitis nesciunt similique dicta culpa libero officiis minima nulla!
        </p>
      </aside>
      <div class="content">
        <div class="hero">
          <h2>lorem ipsum dolor</h2>
          <button>lorem ipsum</button>
        </div>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi alias ad?
          </p>
        </article>
        <editorial-links data-widget />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt maiores fuga, soluta commodi blanditiis ab odit odio illum repellat unde velit? Nulla distinctio doloribus incidunt saepe temporibus exercitationem voluptate.
        </p>
        <quick-degree-finder data-widget />
      </div>
    </div>
  </div>
</template>

<script>
import QuickDegreeFinder from "./components/QuickDegreeFinder.vue"
import EditorialLinks from "./components/EditorialLinks.vue"

export default {
  components: {
    QuickDegreeFinder,
    EditorialLinks,
  },
}
</script>

<style scoped lang="css">
div.page {
  height: 100%;
  font-family: "Redacted Script";
  width: 100%;
  z-index: 1;
  color: #555;
}

.main {
  background: white;
  max-width: 1200px;
  margin: 0 auto;
  grid-row: 1 / -1;
  display: grid;
  grid-template-areas:
    "sidebar"
    "results";
  overflow: auto;
}

.sidebar {
  color: #555;
  background: var(--backgroundColor);
  grid-area: sidebar;
  padding: var(--spacer);
}

.content {
  font-size: 1.5em;
  background: var(--backgroundColor);
  grid-area: results;
  padding: var(--spacer);
  /* box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.12); */
}

.content > .hero {
  margin: var(--spacer);
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  margin: auto;
  background-image: linear-gradient(transparent, var(--backgroundColor)),
    url(https://source.unsplash.com/O7lbegmDGEw);
  height: 320px;
  background-size: 100%;
  margin-bottom: calc(var(--spacer) * 2);
}

.hero h2 {
  margin-bottom: var(--spacer);
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.54);
}

.hero > button {
  border-radius: 3px;
  font-weight: 700;
  border: none;
  background: var(--accentColor);
  color: var(--black);
  box-shadow: var(--boxShadowHover);
  padding: var(--spacer) calc(var(--spacer) * 2);
  font-family: inherit;
  font-size: 1rem;
}

.hero h1 {
  margin-top: 100px;
  font-size: 1.4em;
  line-height: 2;
}

article {
  background: var(--mutedColor);
  padding: calc(var(--spacer) * 2);
  margin: var(--spacer) 0;
  border-radius: 3px;
  box-shadow: inset 4px 0 0 var(--secondaryColor);
}

p {
  color: #555;
  margin-bottom: var(--spacer);
}

@media (min-width: 767px) {
  .main {
    grid-template-rows: none;
    grid-template-columns: 300px 1fr;
    grid-template-areas: "sidebar results";
  }

  .sidebar {
    order: 1;
    /* box-shadow: inset -4px 0 4px rgba(0, 0, 0, 0.12); */
  }

  button.toggle {
    display: none;
  }

  .content {
    order: 2;
  }

  .results {
    box-shadow: none;
  }
}
</style>

