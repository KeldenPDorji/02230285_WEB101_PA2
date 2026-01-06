# 🎮 Advanced Pokémon Catch System

## 🎯 Overview

Your Pokédex now features a **realistic game-like catching mechanic** inspired by the mainline Pokémon games! Each Pokémon has different catch rates based on their rarity, and you'll need the right Pokéball to catch them.

---

## ⚡ **How It Works**

### 🎲 **Rarity System**

Pokémon are classified into **4 rarity tiers** based on their total base stats and experience:

| Rarity | Total Base Stats | Base Experience | Success Rate | Required Ball |
|--------|-----------------|-----------------|--------------|---------------|
| **⚪ Common** | < 400 | < 150 | 85% | Poké Ball (Red) |
| **🔵 Uncommon** | 400-499 | 150-199 | 65% | Great Ball (Blue) |
| **🟡 Rare** | 500-599 | 200-249 | 45% | Ultra Ball (Yellow) |
| **🟣 Legendary** | 600+ | 250+ | 25% | Master Ball (Purple) |

---

## 🎯 **Catch Mechanics**

### **1. Initial Attempt**
- Click the Pokéball icon to attempt a catch
- The ball **shakes 1-3 times** based on catch difficulty
- Higher rarity = lower success rate

### **2. Random Success/Failure**
- **SUCCESS**: Pokémon is caught! Added to your collection ✨
- **FAILURE**: Pokémon breaks free! Try again 💥

### **3. Progressive Difficulty**
Each **failed attempt** makes the next try easier:
- **+10% success rate** per failed attempt
- Maximum success rate: **95%** (never guaranteed!)
- Attempt counter appears on card (red badge)

### **4. Multiple Attempts Example**

**Catching a Legendary (Charizard - 534 stats):**
```
Attempt 1: 25% chance → ❌ "Oh no! CHARIZARD broke free!"
Attempt 2: 35% chance → ❌ "CHARIZARD escaped from the ball!"
Attempt 3: 45% chance → ❌ "It was so close! CHARIZARD got away!"
Attempt 4: 55% chance → ✅ "⚡ Gotcha! CHARIZARD was caught!"
```

---

## 🎨 **Visual Features**

### **Card Indicators**

1. **Rarity Badge** (Top right of name)
   - ⚪ Common (Green glow)
   - 🔵 Uncommon (Blue glow)
   - 🟡 Rare (Yellow glow)
   - 🟣 Legendary (Purple glow)

2. **Pokéball Display**
   - Shows required ball type for uncaught Pokémon
   - Closed Pokéball for caught Pokémon
   - Glowing effect matching ball color

3. **Attempt Counter** (Red badge)
   - Appears after first failed attempt
   - Shows number of tries
   - Pulses to draw attention

4. **Rarity Info Bar**
   - Shows rarity tier and required ball
   - Color-coded border and background
   - Located below Pokémon image

---

## 📊 **Catch Rate Formula**

```javascript
Base Rate + (Attempts × 10%) = Final Rate
Capped at 95% maximum

Examples:
- Common (Attempt 1): 85%
- Uncommon (Attempt 2): 65% + 10% = 75%
- Rare (Attempt 3): 45% + 20% = 65%
- Legendary (Attempt 5): 25% + 40% = 65%
```

---

## 🎮 **Interactive Elements**

### **Shake Animation**
- Ball shakes during catch attempt
- Duration: 300ms per shake
- More shakes = higher success chance

### **Toast Notifications**

**Success Messages:**
- "⚡ Gotcha! [NAME] was caught!"
- "✨ [NAME] is yours now!"
- "🎉 Success! [NAME] joined your team!"
- "💫 [NAME] was successfully caught!"

**Failure Messages:**
- "Oh no! [NAME] broke free!"
- "[NAME] escaped from the ball!"
- "It was so close! [NAME] got away!"
- "[NAME] resisted capture!"
- "Almost had it! [NAME] broke out!"

**After 3+ Attempts:**
- "[NAME] is very strong! Keep trying! (Attempt X)"

---

## 🎯 **Tips & Strategy**

1. **Common Pokémon** → Easy to catch first try
2. **Uncommon Pokémon** → May take 2-3 attempts
3. **Rare Pokémon** → Expect 3-5 attempts
4. **Legendary Pokémon** → Be patient! 5-8 attempts normal

**Pro Tip**: Each failed attempt makes the next try easier, so keep trying!

---

## 🛠️ **Technical Details**

### **Files Modified:**

1. **`usePokemonStore.js`**
   - Added `catchAttempts` tracking
   - `incrementAttempts()` function
   - `resetAttempts()` function

2. **`catchMechanics.js`** (NEW)
   - `getPokemonRarity()` - Calculate rarity
   - `getPokeball()` - Get required ball
   - `calculateCatchRate()` - Calculate success rate
   - `attemptCatch()` - Simulate catch
   - `getCatchMessage()` - Random messages

3. **`PokemonCard.js`**
   - Integrated catch mechanics
   - Shake animation
   - Attempt tracking
   - Visual indicators

4. **`index.css`**
   - Enhanced shake animation
   - Pulse animation for counter

---

## 📈 **Statistics**

### Pokémon Distribution (Gen 1-8):
- **Common**: ~40% of all Pokémon
- **Uncommon**: ~35% of all Pokémon
- **Rare**: ~20% of all Pokémon
- **Legendary**: ~5% of all Pokémon

### Example Legendary Pokémon:
- Mewtwo (680 total stats) 🟣
- Rayquaza (680 total stats) 🟣
- Arceus (720 total stats) 🟣
- Kyogre (670 total stats) 🟣

### Example Common Pokémon:
- Pidgey (251 total stats) ⚪
- Rattata (253 total stats) ⚪
- Caterpie (195 total stats) ⚪
- Weedle (195 total stats) ⚪

---

## 🎉 **Features Added**

✅ **4 Different Pokéballs** (Poké, Great, Ultra, Master)  
✅ **Rarity-Based Classification** (Common, Uncommon, Rare, Legendary)  
✅ **Random Catch Success/Failure**  
✅ **Progressive Success Rate** (+10% per attempt)  
✅ **Realistic Shake Animations**  
✅ **Attempt Counter Display**  
✅ **Rarity Badges & Info**  
✅ **Dynamic Toast Messages**  
✅ **Color-Coded Visual Feedback**  
✅ **Persistent Attempt Tracking**  

---

## 🔮 **Future Enhancements**

Potential additions:
- [ ] Critical catches (instant catch, very rare)
- [ ] Status effects (weakened = easier catch)
- [ ] Weather bonuses
- [ ] Type-specific balls
- [ ] Catch combo bonuses
- [ ] Shiny variants (harder to catch)
- [ ] Sound effects for shakes/catches
- [ ] Animation particles on success

---

<div align="center">

**Made with 💜 and ⚡ by Kelden Drac**

*Now with realistic Pokémon catching mechanics!*

</div>
