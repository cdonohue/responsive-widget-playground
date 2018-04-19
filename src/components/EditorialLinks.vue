<template>
<div>
  <h2>Featured Programs</h2>
  <ol>
    <li v-for="listing in listings" v-bind:key="listing.schoolName">
      <editorial-listing v-bind:listing="listing" />
    </li>
  </ol>  
</div>
</template>

<script>
import EditorialListing from "./EditorialListing.vue"

export default {
  components: {
    EditorialListing,
  },

  data: () => {
    return {
      listings: [
        {
          imageUrl: "https://source.unsplash.com/07FY94IgSIk",
          schoolName: "East Bridge Conservatory",
          snippet:
            "Explore over 200 career-focused online degree programs at East Bridge & take advantage of some of the nation's most affordable tuition rates, while earning a degree from a private, nonprofit, NEASC accredited university.",
          buckets: [],
        },
        {
          imageUrl: "https://source.unsplash.com/tQuEvmj83U4",
          schoolName: "Da Vinci Conservatory",
          snippet:
            "For more than 40 years, Da Vinci Conservatory, an accredited institution, has helped working professionals reach their educational goals.",
          buckets: [],
        },
        {
          imageUrl: "https://source.unsplash.com/Tye57KzVWSM",
          schoolName: "Waterford Institute",
          snippet:
            "Building on Waterford's mission to provide greater access to affordable, world-class education, Waterford Institute delivers a fully personalized online experience that's tailored for working adults.",
          buckets: [],
        },
      ],
    }
  },
}
</script>

<style scoped>
h2 {
  font-family: var(--baseFont);
  margin-bottom: var(--spacer);
  font-size: 24px;
}

ol,
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
}
</style>
