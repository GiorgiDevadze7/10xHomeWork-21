// Exercise 1: Weapon Comparison - Function Basics
function compareWeapons(weapon1, damage1, weapon2, damage2) {
    if (damage1 > damage2) {
        return `${weapon1} deals more damage!`;
    } else if (damage2 > damage1) {
        return `${weapon2} deals more damage!`;
    } else {
        return "Both weapons deal equal damage!";
    }
}

// Exercise 2: Spell Casting - Function Parameters
function castSpell(spell, character) {
    return `${character} casts ${spell}!`;
}

// Exercise 3: Bounty Calculator - Return Values
function calculateBounty(currentBounty, increase) {
    return currentBounty + increase;
}

// Exercise 4: Training - Default Parameters
function trainSoldier(name, skill = 50) {
    return `${name} has ${skill} combat skill`;
}

// Exercise 5: Radio Commands - String Manipulation
function radioCommand(command) {
    return `${command}... ${command}... ${command}...`;
}

// Exercise 6: Damage Multiplier - Function Expressions
const calculateHeadshot = function(damage) {
    return damage * 4;
};

// Exercise 7: Grenade Calculation - Arrow Functions
const calculateGrenades = (count) => `${count * 2} grenades available!`;

// Main functionality for the CS Weapon Comparison
document.addEventListener('DOMContentLoaded', function() {
    const compareButton = document.getElementById('compare-button');
    const resultDiv = document.getElementById('result');
    const logContainer = document.getElementById('log-container');
    
    // Fix image loading issues by removing parameters from URLs
    document.querySelectorAll('.weapon img').forEach(img => {
        if (img.src.includes('?')) {
            img.src = img.src.split('?')[0];
        }
    });
    
    // Function to add log entries
    function addLogEntry(text) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = text;
        logContainer.prepend(entry);
    }
    
    // Add initial log entry
    addLogEntry("System initialized. Ready to compare weapons.");
    
    // Create a status indicator
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'status-indicator';
    statusIndicator.style.display = 'none';
    compareButton.parentNode.insertBefore(statusIndicator, compareButton.nextSibling);
    
    // Add CSS for status indicator
    const style = document.createElement('style');
    style.textContent = `
        .status-indicator {
            display: inline-block;
            margin: 10px auto;
            padding: 8px 16px;
            background-color: #17212b;
            color: #66c0f4;
            border-radius: 4px;
            font-size: 14px;
            animation: pulse-blue 1.5s infinite;
        }
        
        @keyframes pulse-blue {
            0% { box-shadow: 0 0 0 0 rgba(102, 192, 244, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(102, 192, 244, 0); }
            100% { box-shadow: 0 0 0 0 rgba(102, 192, 244, 0); }
        }
        
        .processing {
            position: relative;
            padding-right: 30px;
        }
        
        .processing::after {
            content: "";
            position: absolute;
            right: 10px;
            top: 50%;
            width: 15px;
            height: 15px;
            margin-top: -7.5px;
            border: 3px solid #66c0f4;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    compareButton.addEventListener('click', function() {
        // Show processing status
        compareButton.disabled = true;
        compareButton.textContent = "Processing...";
        statusIndicator.textContent = "Analyzing weapon statistics";
        statusIndicator.classList.add('processing');
        statusIndicator.style.display = 'inline-block';
        
        // Reset previous results
        resultDiv.className = 'result';
        resultDiv.textContent = '';
        document.getElementById('weapon1').style.transform = 'none';
        document.getElementById('weapon1').style.boxShadow = 'none';
        document.getElementById('weapon2').style.transform = 'none';
        document.getElementById('weapon2').style.boxShadow = 'none';
        
        // Get weapon data
        const weapon1Name = document.querySelector('#weapon1 .weapon-name').textContent;
        const weapon1Damage = parseInt(document.querySelector('#weapon1 .damage-value').textContent);
        
        const weapon2Name = document.querySelector('#weapon2 .weapon-name').textContent;
        const weapon2Damage = parseInt(document.querySelector('#weapon2 .damage-value').textContent);
        
        // Simulate processing time
        setTimeout(function() {
            // Update status
            statusIndicator.textContent = "Calculating damage potential";
            
            setTimeout(function() {
                // Update status again
                statusIndicator.textContent = "Finalizing comparison";
                
                setTimeout(function() {
                    // Complete the process
                    const result = compareWeapons(weapon1Name, weapon1Damage, weapon2Name, weapon2Damage);
                    
                    resultDiv.textContent = result;
                    resultDiv.className = 'result winner';
                    
                    // Highlight the winner
                    if (result.includes(weapon1Name)) {
                        document.getElementById('weapon1').style.transform = 'translateY(-10px)';
                        document.getElementById('weapon1').style.boxShadow = '0 10px 20px rgba(102, 192, 244, 0.4)';
                        document.getElementById('weapon2').style.transform = 'none';
                        document.getElementById('weapon2').style.boxShadow = 'none';
                    } else if (result.includes(weapon2Name)) {
                        document.getElementById('weapon2').style.transform = 'translateY(-10px)';
                        document.getElementById('weapon2').style.boxShadow = '0 10px 20px rgba(102, 192, 244, 0.4)';
                        document.getElementById('weapon1').style.transform = 'none';
                        document.getElementById('weapon1').style.boxShadow = 'none';
                    } else {
                        document.getElementById('weapon1').style.transform = 'none';
                        document.getElementById('weapon1').style.boxShadow = 'none';
                        document.getElementById('weapon2').style.transform = 'none';
                        document.getElementById('weapon2').style.boxShadow = 'none';
                    }
                    
                    // Add log entries demonstrating all functions
                    addLogEntry(`Weapon comparison: ${result}`);
                    addLogEntry(`Exercise 2: ${castSpell("Smoke", "Terrorist")}`);
                    
                    const newBounty = calculateBounty(1000, 500);
                    addLogEntry(`Exercise 3: Bounty increased to $${newBounty}`);
                    
                    addLogEntry(`Exercise 4: ${trainSoldier("Alex", 85)}`);
                    addLogEntry(`Exercise 4 (default): ${trainSoldier("Rookie")}`);
                    
                    addLogEntry(`Exercise 5: ${radioCommand("Rush B")}`);
                    
                    const headshotDamage = calculateHeadshot(weapon1Damage);
                    addLogEntry(`Exercise 6: ${weapon1Name} headshot deals ${headshotDamage} damage`);
                    
                    addLogEntry(`Exercise 7: ${calculateGrenades(5)}`);
                    
                    // Reset button and hide status
                    compareButton.disabled = false;
                    compareButton.textContent = "Compare Weapons";
                    statusIndicator.style.display = 'none'; // Hide the status indicator after completion
                }, 1000); // Delay for finalization
            }, 1000); // Delay for calculating damage
        }, 1000); // Delay for analyzing weapon stats
    });
});
