# capacitor-referrer

Utility to get the referrer of the installation on Google Play.

## Install

```bash
npm install capacitor-referrer
npx cap sync
```

## API

<docgen-index>

* [`getReferrerDetails()`](#getreferrerdetails)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getReferrerDetails()

```typescript
getReferrerDetails() => Promise<ReferrerDetails>
```

**Returns:** <code>Promise&lt;<a href="#referrerdetails">ReferrerDetails</a>&gt;</code>

--------------------


### Interfaces


#### ReferrerDetails

| Prop                            | Type                 | Description                                                               |
| ------------------------------- | -------------------- | ------------------------------------------------------------------------- |
| **`referrerUrl`**               | <code>string</code>  | The install referrer passed to the store when installing the app, if any. |
| **`referrerClickTime`**         | <code>number</code>  | The install referrer click time.                                          |
| **`appInstallTime`**            | <code>number</code>  | The app install time.                                                     |
| **`instantExperienceLaunched`** | <code>boolean</code> | If the instant experience was launched.                                   |

</docgen-api>
