<script>
  import Navbar from "$atoms/Navbar.svelte";
  import HelmetIcon from "$atoms/Icons/HelmetIcon.svelte";
  import NavbarItemList from "$molecules/NavbarItemList.svelte";
  import NavbarBurger from "$atoms/NavbarBurger.svelte";

  let mobileActive = false;
  const toggleMobileActive = (e) => mobileActive = e.detail;
  const navBarItems = [
    { text: "about", link: "/about" },
    { text: "techblog", link: "/blogs/techblog" },
    { text: "translation", link: "/blogs/translation" },
    { text: "photographs", link: "/blogs/photographs" }
  ];
</script>
<Navbar>
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <HelmetIcon />
    </a>

    <NavbarBurger on:active={toggleMobileActive} />
  </div>
  <div class="navbar-menu" class:is-active={mobileActive} id="navbarBasicExample">
    <div class="navbar-start">
      <NavbarItemList itemList="{navBarItems}" />

      <!--      <div class='navbar-item has-dropdown is-hoverable'>-->
      <!--        <a class='navbar-link'>-->
      <!--          More-->
      <!--        </a>-->

      <!--        <div class='navbar-dropdown'>-->
      <!--          <a class='navbar-item'>-->
      <!--            About-->
      <!--          </a>-->
      <!--          <a class='navbar-item'>-->
      <!--            Jobs-->
      <!--          </a>-->
      <!--          <a class='navbar-item'>-->
      <!--            Contact-->
      <!--          </a>-->
      <!--          <hr class='navbar-divider'>-->
      <!--          <a class='navbar-item'>-->
      <!--            Report an issue-->
      <!--          </a>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>

    <!--    <div class='navbar-end'>-->
    <!--      <div class='navbar-item'>-->
    <!--        <div class='buttons'>-->
    <!--          <a class='button is-primary'>-->
    <!--            <strong>Sign up</strong>-->
    <!--          </a>-->
    <!--          <a class='button is-light'>-->
    <!--            Log in-->
    <!--          </a>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
  <div class="button">
    <button class="button is-dark is-active">Night Mode</button>
      <span class="button is-hovered"></span>
  </div>
</Navbar>