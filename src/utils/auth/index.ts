import passport from 'passport'

import LocalStrategy from "./strategies/localstrategy";

passport.use(LocalStrategy);

