<template>
   <div class="wrapper">
     <nav role="navigation" aria-label="main navigation">
      <div class="brand">
        Widgets Demo
      </div>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </nav>
   </div>
</template>

<style scoped>
.wrapper {
  background: var(--primaryColor);
  color: var(--white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 100;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.12);
}
nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: inherit;
  /* box-shadow: 0 4px 5px rgba(0, 0, 0, 0.12); */
}

.brand {
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--spacer);
  font-weight: 400;
}

ul {
  list-style-type: none;
  display: flex;
}

li {
  padding: var(--spacer);
}
</style>



