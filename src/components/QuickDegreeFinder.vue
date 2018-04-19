<template>
  <div class="quick-degree-finder" data-observe-resizes>
    <form action="">
      <fieldset>
        <legend>
          Search Colleges
        </legend>
        <div class="field-group">
          <select name="" id="">
            <option value="">Select a Degree</option>
          </select>
          <select name="" id="">
            <option value="">Select a Category</option>
          </select>
          <select name="" id="">
            <option value="">Select a Subject</option>
          </select>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> &nbsp;Search
          </button>
        </div>
      </fieldset> 
      <small></small>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
form {
  background: var(--white);
  border-radius: 3px;
  font-family: var(--baseFont);
  font-size: 14px;
  box-shadow: var(--boxShadowHover);
  margin-bottom: calc(var(--spacer) * 2);
  overflow: hidden;
}

fieldset {
  border: none;
  padding: 0;
}

select {
  display: block;
  width: calc(100% - var(--spacer) * 2);
  margin: var(--spacer);
  padding: calc(var(--spacer) / 2) var(--spacer);
  -webkit-appearance: none;
  height: 38px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  position: relative;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-position: center right 8px;
  background-repeat: no-repeat;
}

legend {
  padding: var(--spacer);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  width: 100%;
  background: rgba(0, 0, 0, 0.12);
}

button {
  margin: var(--spacer);
  border: none;
  width: calc(100% - var(--spacer) * 2);
  font-size: 16px;
  border-radius: 3px;
  background: var(--secondaryColor);
  color: white;
  height: 38px;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: var(--materialShadow2);
}

.quick-degree-finder.width_LG .field-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>


