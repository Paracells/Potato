<template>
  <header>
    <div class="header header__background">
      <div class="container">
        <div class="d-flex flex-column header">
          <div class="row position-relative">
            <div
                class="
                col
                ms-5
                me-lg-5 me-sm-2
                d-flex
                justify-content-between
                padding_top
              "
            >
              <svg
                  width="61"
                  height="67"
                  viewBox="0 0 61 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.70648 17.6542C14.0584 10.0911 26.4247 -4.21684 45.6793 1.19329C54.3486 3.62918 60.5241 11.3136 60.9722 20.5421C61.4235 29.8357 56.0881 40.2514 42.7356 48.4433C40.5395 49.7906 38.2108 52.0112 35.6197 54.6049C35.2897 54.9352 34.9558 55.2712 34.6184 55.6107C32.3778 57.8653 29.9794 60.2788 27.4997 62.2644C24.6534 64.5438 21.4607 66.4632 17.9565 66.9045C14.326 67.3618 10.6873 66.1968 7.11737 62.972C-0.0648112 56.4841 -0.847159 46.8219 0.608309 38.2828C2.06982 29.7083 5.87045 21.662 8.70648 17.6542ZM44.5972 5.04373C28.1121 0.411763 17.279 12.4643 11.9718 19.9643C9.47824 23.4881 5.9115 30.9756 4.55145 38.9548C3.18537 46.9694 4.1273 54.8809 9.79884 60.0042C12.6558 62.5849 15.1696 63.2243 17.4566 62.9363C19.8697 62.6324 22.3593 61.2567 24.9993 59.1426C27.2873 57.3104 29.5086 55.0765 31.7654 52.8068C32.1059 52.4644 32.4472 52.1211 32.7897 51.7783C35.3322 49.2333 37.9804 46.6682 40.6437 45.0343C53.1138 37.3837 57.3389 28.1911 56.9769 20.736C56.6117 13.2159 51.6002 7.01142 44.5972 5.04373Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9983 21.0049C24.9983 19.9003 25.8937 19.0049 26.9983 19.0049H31.9983C33.1028 19.0049 33.9983 19.9003 33.9983 21.0049C33.9983 22.1094 33.1028 23.0049 31.9983 23.0049H26.9983C25.8937 23.0049 24.9983 22.1094 24.9983 21.0049Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.9983 28.0041C32.9983 26.8996 33.8937 26.0041 34.9983 26.0041H37.9983C39.1028 26.0041 39.9983 26.8996 39.9983 28.0041C39.9983 29.1087 39.1028 30.0041 37.9983 30.0041H34.9983C33.8937 30.0041 32.9983 29.1087 32.9983 28.0041Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.9983 46.0022C16.9983 44.8976 17.8937 44.0022 18.9983 44.0022H21.9983C23.1028 44.0022 23.9983 44.8976 23.9983 46.0022C23.9983 47.1068 23.1028 48.0022 21.9983 48.0022H18.9983C17.8937 48.0022 16.9983 47.1068 16.9983 46.0022Z"
                    fill="white"
                />
              </svg>
              <nav v-if="flag" class="navbar navbar-expand-lg navbar-dark">
                <div>
                  <button @click="flag=false"
                          class="navbar-toggler"
                          type="button"
                          aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul
                        class="
                        navbar-nav
                        header__menu
                        d-flex
                        align-items-baseline
                      "
                    >
                      <li class="nav-item header__menu-item">Цены</li>
                      <li class="nav-item header__menu-item active-border">
                        Видео
                      </li>
                      <li class="nav-item header__menu-item">О нас</li>
                      <li class="nav-item header__menu-item active">
                        Оставить заявку
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <nav v-else class="mobile__nav">
                <div @click="flag=true" class="close__icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.80762" y="2.97919" width="30" height="4" transform="rotate(45 5.80762 2.97919)"
                          fill="#404040"/>
                    <rect width="30" height="4" transform="matrix(-0.707107 0.707107 0.707107 0.707107 24.1924 2.97919)"
                          fill="#404040"/>
                  </svg>
                </div>
                <div class="menu__container d-flex flex-column justify-content-between h-100">
                  <div class="menu-top">
                    <ul>
                      <li>Цены</li>
                      <li>Видео</li>
                      <li>О нас</li>
                      <li>Оставить заявку</li>
                    </ul>
                  </div>
                  <div class="menu-bottom">
                    <p>КАРТОШЕЧКА</p>
                    <the-icons/>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="row my-md-auto mt-5">
            <div
                class="
                ms-5 ms-lg-0
                h-100
                text-uppercase
                header__center-text
                text-wrap
                d-flex
                justify-content-lg-center
                flex-wrap flex-column flex-md-row
              "
            >
              <span>Ка</span>
              <span>рто</span>
              <span>шеч</span>
              <span>ка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheIcons from "@/components/footer/TheIcons";

export default {
  name: "TheHeader",
  components: {TheIcons},
  data() {
    return {
      flag: true
    }
  }
};
</script>


<style lang="scss" scoped>

.mobile__nav {
  background-color: #fff;
  width: 100%;
  min-height: 800px;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.close__icon {
  position: absolute;
  top: 56px;
  right: 23px;
}

.menu__container {
  margin-left: 60px;
  padding-left: 0;
}

.menu-top {
  margin-top: 106px;

  & ul {
    list-style-type: none;
    padding-left: 0;

    & li {
      margin-bottom: 43px;
      font-weight: 500;
      font-size: 30px;
      line-height: 37px;
      color: #343434;
    }
  }
}

.menu-bottom {
  margin-bottom: 147px;

  & p {
    font-weight: 900;
    font-size: 30px;
    line-height: 37px;
    text-transform: uppercase;
    color: #35312D;
    margin-bottom: 20px;
  }
}


.header {
  min-height: 900px;

  &__background {
    background: radial-gradient(
            61.83% 61.83% at 50% 50%,
            rgba(225, 186, 110, 0) 0%,
            rgba(225, 186, 110, 0.7) 100%
    ),
    url("../../assets/images/header/background.png") center/cover no-repeat;
    width: auto;
    max-width: 100%;
  }
}

.padding_top {
  padding-top: 36px;
}

.header {
  &__menu {
    list-style-type: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #fff;

    &-item {
      margin-right: 59px;
      cursor: pointer;
      padding-bottom: 4px;

      &.active-border {
        border-bottom: 4px solid #ecba46;
      }

      &.active {
        border: 1px solid #fff;
        font-size: 20px;
        line-height: 24px;
        padding: 13px 32px 13px 32px;
        border-radius: 30px;
        font-weight: 500;
        margin-right: 0;

        &:hover {
          background-color: #fff;
          color: black;
        }
      }
    }
  }

  &__center-text {
    font-weight: 900;
    font-size: 112px;
    line-height: 137px;
    color: #ffffff;
  }
}

@media (max-width: 575.98px) {
  .header {
    &__center-text {
      font-size: 92px;
      line-height: 112px;
    }
  }
}

@media (max-width: 991px) {
  .header {
    min-height: 800px;
  }

}

.navbar-dark {
  & .navbar-toggler {
    border: none;
  }

  & .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255,255,255,255)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='4' d='M1 7h50M1 15h50M1 23h50'/></svg>");
  }
}
</style>
