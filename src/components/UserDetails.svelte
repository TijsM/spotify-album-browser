<script>
  import { getUserData } from "../lib/fetchSpotify.js";

  getUserData();

</script>

Welcome {localStorage.getItem('user-name')}
<br />
