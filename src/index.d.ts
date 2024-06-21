export = Phantom

import type { PhantomNone } from "./Util"

import PhantomArray from "./Array"
import PhantomDictionary from "./Dictionary"
import PhantomSet from "./Set"

declare namespace Phantom {
  export const None: PhantomNone
  export type None = PhantomNone

  export {
    PhantomArray as Array,
    PhantomArray as List,
    PhantomDictionary as Dictionary,
    PhantomSet as Set,
  }
}
