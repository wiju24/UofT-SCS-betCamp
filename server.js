const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// app.engine('handlebars',  hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening on PORT 3001'));
});



//Route

 //makeing home routes to render handlebars
  //youre going to create in your handlebars buttons that have event listeners on that 
  //handlebnar script
  //those event listerners should run functions that call your api routes

