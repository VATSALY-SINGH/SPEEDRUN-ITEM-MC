const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

// ✅ FULL ITEM LIST
const options = [
"Stick","Coal","Charcoal","Iron Ingot","Gold Ingot","Copper Ingot","Netherite Ingot","Netherite Scrap","Diamond","Emerald",
"Redstone Dust","Lapis Lazuli","Nether Quartz","Amethyst Shard","Flint","String","Feather","Gunpowder","Bone","Bone Meal",
"Leather","Rabbit Hide","Phantom Membrane","Slimeball","Magma Cream","Blaze Rod","Blaze Powder","Ghast Tear","Ender Pearl","Eye of Ender",
"Prismarine Shard","Prismarine Crystals","Nautilus Shell","Heart of the Sea","Ink Sac","Glow Ink Sac","Turtle Scute","Honeycomb","Honey Bottle","Paper",
"Book","Enchanted Book","Writable Book","Written Book","Compass","Recovery Compass","Clock","Map","Empty Map","Name Tag",
"Lead","Saddle","Bucket","Water Bucket","Lava Bucket","Milk Bucket","Powder Snow Bucket","Axolotl Bucket","Cod Bucket","Salmon Bucket",
"Pufferfish Bucket","Tropical Fish Bucket","Wooden Sword","Stone Sword","Iron Sword","Golden Sword","Diamond Sword","Netherite Sword",
"Wooden Pickaxe","Stone Pickaxe","Iron Pickaxe","Golden Pickaxe","Diamond Pickaxe","Netherite Pickaxe",
"Wooden Axe","Stone Axe","Iron Axe","Golden Axe","Diamond Axe","Netherite Axe",
"Wooden Shovel","Stone Shovel","Iron Shovel","Golden Shovel","Diamond Shovel","Netherite Shovel",
"Wooden Hoe","Stone Hoe","Iron Hoe","Golden Hoe","Diamond Hoe","Netherite Hoe",
"Bow","Arrow","Spectral Arrow","Tipped Arrow","Crossbow","Shield","Trident","Fishing Rod",
"Flint and Steel","Shears","Brush","Totem of Undying","Firework Rocket","Firework Star",
"Apple","Golden Apple","Enchanted Golden Apple","Bread","Cake","Cookie","Pumpkin Pie",
"Carrot","Golden Carrot","Potato","Baked Potato","Poisonous Potato","Beetroot","Beetroot Soup",
"Mushroom Stew","Rabbit Stew","Suspicious Stew","Sweet Berries","Glow Berries","Melon Slice",
"Glistering Melon Slice","Chorus Fruit","Popped Chorus Fruit","Dried Kelp",
"Cooked Beef","Cooked Porkchop","Cooked Chicken","Cooked Mutton","Cooked Rabbit","Cooked Cod","Cooked Salmon",
"Raw Beef","Raw Porkchop","Raw Chicken","Raw Mutton","Raw Rabbit","Raw Cod","Raw Salmon",
"Tropical Fish","Pufferfish","Rotten Flesh","Spider Eye","Fermented Spider Eye","Sugar","Egg","Milk Bottle",
"Wheat","Seeds","Beetroot Seeds","Pumpkin Seeds","Melon Seeds","Nether Wart",
"Warped Fungus","Crimson Fungus","Warped Roots","Crimson Roots","Weeping Vines","Twisting Vines",
"Glowstone Dust","Gunpowder","Sand","Red Sand","Gravel","Clay Ball","Brick","Nether Brick","Resin Brick","Stick Bundle",
"Chain","Iron Nugget","Gold Nugget",
"Music Disc 13","Music Disc Cat","Music Disc Blocks","Music Disc Chirp","Music Disc Far","Music Disc Mall","Music Disc Mellohi",
"Music Disc Stal","Music Disc Strad","Music Disc Ward","Music Disc 11","Music Disc Wait","Music Disc Pigstep",
"Music Disc Otherside","Music Disc Relic","Music Disc 5",
"Painting","Item Frame","Glow Item Frame","Armor Stand","Banner","Shield Banner Pattern","Flower Banner Pattern",
"Creeper Banner Pattern","Skull Banner Pattern","Mojang Banner Pattern","Globe Banner Pattern","Piglin Banner Pattern",
"Bed","Boat","Minecart","Chest Minecart","Furnace Minecart","TNT Minecart","Hopper Minecart","Command Block Minecart",
"Elytra","Turtle Helmet",
"Leather Helmet","Leather Chestplate","Leather Leggings","Leather Boots",
"Chainmail Helmet","Chainmail Chestplate","Chainmail Leggings","Chainmail Boots",
"Iron Helmet","Iron Chestplate","Iron Leggings","Iron Boots",
"Golden Helmet","Golden Chestplate","Golden Leggings","Golden Boots",
"Diamond Helmet","Diamond Chestplate","Diamond Leggings","Diamond Boots",
"Netherite Helmet","Netherite Chestplate","Netherite Leggings","Netherite Boots",
"Horse Armor Iron","Horse Armor Gold","Horse Armor Diamond","Wolf Armor",
"Goat Horn","Echo Shard","Disc Fragment","Trial Key","Ominous Trial Key","Breeze Rod","Wind Charge"
];

// 🎨 BETTER COLOR SYSTEM (prevents black)
function getColor(i) {
    return `hsl(${(i * 137) % 360}, 80%, 60%)`;
}

const arc = (2 * Math.PI) / options.length;

// 🎡 DRAW WHEEL
function drawWheel() {
    ctx.clearRect(0, 0, 400, 400);

    for (let i = 0; i < options.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = getColor(i);
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, i * arc, (i + 1) * arc);
        ctx.fill();

        // 👇 show only some labels
        if (i % 15 === 0) {
            ctx.save();
            ctx.translate(200, 200);
            ctx.rotate(i * arc + arc / 2);
            ctx.fillStyle = "white";
            ctx.font = "10px Arial";
            ctx.fillText(options[i], 120, 3);
            ctx.restore();
        }
    }
}

drawWheel();

let currentRotation = 0;

// 🎯 SPIN FUNCTION
function spin() {
    let randomDegree = Math.floor(Math.random() * 360) + 360 * 8;
    currentRotation += randomDegree;

    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        let actualDeg = currentRotation % 360;

        let index = Math.floor(
            (360 - actualDeg + 90 + (360 / options.length) / 2)
            / (360 / options.length)
        ) % options.length;

        showPopup(options[index]);
    }, 5000);
}

// 🎉 SHOW POPUP
function showPopup(result) {
    document.getElementById("popupText").innerText = "You got: " + result;
    document.getElementById("popup").style.display = "flex";
}

// ❌ CLOSE POPUP
function closePopup() {
    document.getElementById("popup").style.display = "none";
}