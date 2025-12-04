class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Dataset is empty");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data
      .filter(user => user.steps > 7000)
      .map(user => user.user);
  }

  // Method to get average calories
  getAverageCalories() {
    const totalCalories = this.data.reduce((sum, user) => sum + user.calories, 0);
    return totalCalories / this.data.length;
  }

  getUserSummary() {
    return this.data.map(user => 
      `User ${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
    );
  }
}

// Sample data
const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

// Create instance
const analytics = new FitnessAnalytics(workoutData);

// Execute methods
console.log("Active Users:", analytics.getActiveUsers());
console.log("Average Calories:", analytics.getAverageCalories());
console.log("User Summary:", analytics.getUserSummary());
