export default function getNeighborhoodsList() {
	sanFranciscoNeighborhoods: ['SOMA', 'Union Square'],

	addNeighborhood: (newNeighborhood) => {
		this.sanFranciscoNeighborhoods.push(newNeighborhood);
		return this.sanFranciscoNeighborhoods;
	},
};
