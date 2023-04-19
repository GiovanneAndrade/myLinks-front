import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Nav } from "../nav/Nav";
import { AuthContext } from "../../providers/auth";
import { Button } from "../button/Button";
import { Home } from "../../pages/home/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Categories } from "../categories/Categories";
import { useMediaQuery } from "@mui/material";
import {
  AddCategory,
  AddCategoryContainer,
  ButtonCancel,
  ButtonPush,
  Buttons,
} from "../categories/CategoriesStyles";
import { postCategory } from "../../services/UserServices";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { LineStyleOutlined } from "@mui/icons-material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open, isScreenSmall }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(!isScreenSmall && {
      marginLeft: `-${drawerWidth}px`,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [value, setValue] = React.useState("");

  const {
    open,
    setOpen,
    categories,
    setNewLink,
    showAddButton,
    setShowAddButton,
    newCategory,
    setNewCategory,
    setSelectCategory,
    setNewHome
  } = React.useContext(AuthContext);
  const allCategories = categories?.filter((c) => c.id === 0);
  const newCategories = categories?.filter((c) => c.id !== 0);
  console.log(categories?.filter((c) => c.name === 'ola mundo'))
  const handleDrawerClose = () => {
    setOpen(false);
  };
  function addCategory() {
    setShowAddButton(true);
    localStorage.removeItem("check");
  }
  function handleForm(e) {
    e.preventDefault();
    setValue("");
  }
  function pushCategory() {
    const categories = postCategory(value);
    categories
      .then((response) => {
        console.log(response.data);
        setValue("");
        setShowAddButton(false);
        let listLink = localStorage.getItem("check");
        listLink = listLink ? JSON.parse(listLink) : [];
        const myCategory = { name: value, linkId: listLink };
        setNewCategory(myCategory);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
      });
  }
  const isScreenSmall = useMediaQuery("(max-width:600px)");

  const buttonDisabled = value === "" ? true : false;

  function selectCategory(links, listId, listName) {
    setNewLink(links);
    setSelectCategory({ listId: listId, name: listName });
    setOpen(false);
    if(listId ===0){
      setNewHome(true);
    }
    alert(listId)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Nav />
      <Drawer
        sx={{
          ...(!isScreenSmall && {
            width: drawerWidth,
          }),
          /* width: drawerWidth, */
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {allCategories?.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() =>
                  selectCategory(text?.links, text?.id, text?.name)
                }
              >
                <ListItemIcon>
                  <AllInclusiveIcon />
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <AddCategoryContainer selectCategory={"transparent"}>
            {!showAddButton ? (
              <AddCategory
                selectCategory={"rgba(0, 0, 0, 0.782)"}
                onClick={addCategory}
              >
                <AddCircleIcon style={{ fontSize: "30px" }} />
              </AddCategory>
            ) : (
              <form onSubmit={handleForm}>
                <input
                  type="text"
                  minLength={5}
                  placeholder="digite sua categoria"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <Buttons>
                  <ButtonCancel
                    showButton={buttonDisabled}
                    onClick={() => setShowAddButton(false)}
                  >
                    canelar
                  </ButtonCancel>
                  <ButtonPush
                    showButton={buttonDisabled}
                    onClick={pushCategory}
                    type="submit"
                    disabled={buttonDisabled}
                  >
                    enviar
                  </ButtonPush>
                </Buttons>
              </form>
            )}
          </AddCategoryContainer>
          {newCategories?.map((text, index) => (
            <ListItem
              onClick={() => selectCategory(text?.links, text?.id, text?.name)}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main
        open={open}
        style={{ maxWidth: "100%" }}
        isScreenSmall={isScreenSmall}
      >
        <DrawerHeader />

        <Home />
      </Main>
    </Box>
  );
}
