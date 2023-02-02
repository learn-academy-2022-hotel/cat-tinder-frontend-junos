# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### logo
https://www.canva.com/design/DAFZR1T4EMw/ahIyP1q8yEYNyLZU04B_GQ/watch?utm_content=DAFZR1T4EMw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"

### Dropdown (for Header) structure
imports:
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  
{/* <NavItem>
<UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>Options</DropdownToggle>
    <DropdownMenu end>
    <DropdownItem>Option 1</DropdownItem>
    <DropdownItem>Option 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Reset</DropdownItem>
    </DropdownMenu>
</UncontrolledDropdown>
</NavItem> */}

### Video Logo in Header
{/* <video src={firelogo} style={{height:'7vh'}}></video> */}

### Header HTML structure
<body>
    <div>
        <nav
        class="navbar navbar-expand-md navbar-light bg-light"
        >
        <div
            class="container-fluid"
        >
            <div
            class="leftSide"
            >
            <a
                class="navbar-brand"
            >
                TinderToons
            </a>
            <a
                class="navbar-brand"
                href="/"
            >
                <video
                src="firelogo.mp4"
                style="height: 7vh;"
                />
            </a>
            </div>
            <button
            aria-label="Toggle navigation"
            class="navbar-toggler"
            type="button"
            >
            <span
                class="navbar-toggler-icon"
            />
            </button>
            <div
            class="logo"
            >
            <div
                class="collapse navbar-collapse"
            >
                <ul
                class="ml-auto navbar-nav"
                >
                <li
                    class="nav-item"
                >
                    <a
                    class="nav-link"
                    >
                    Testing
                    </a>
                </li>
                <li
                    class="nav-item"
                >
                    <a
                    class="nav-link"
                    >
                    Testing
                    </a>
                </li>
                <li
                    class="nav-item"
                >
                    <li
                    class="dropdown nav-item"
                    >
                    <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        class="dropdown-toggle nav-link"
                        href="#"
                    >
                        Options
                    </a>
                    <div
                        aria-hidden="true"
                        class="dropdown-menu dropdown-menu-end"
                        role="menu"
                        tabindex="-1"
                    >
                        <button
                        class="dropdown-item"
                        role="menuitem"
                        tabindex="0"
                        type="button"
                        >
                        Option 1
                        </button>
                        <button
                        class="dropdown-item"
                        role="menuitem"
                        tabindex="0"
                        type="button"
                        >
                        Option 2
                        </button>
                        <div
                        class="dropdown-divider"
                        tabindex="-1"
                        />
                        <button
                        class="dropdown-item"
                        role="menuitem"
                        tabindex="0"
                        type="button"
                        >
                        Reset
                        </button>
                    </div>
                    </li>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
    </div>
</body>
